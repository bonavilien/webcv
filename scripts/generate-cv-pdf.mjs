import { spawn } from "node:child_process";
import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";

const root = resolve(".");
const distDir = join(root, "dist");
const output = join(root, "public", "cv-julien-bonavita.pdf");
const port = 4339;
const origin = `http://127.0.0.1:${port}`;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function run(command, args) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolveRun();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

function staticServer() {
  const server = createServer((request, response) => {
    const url = new URL(request.url ?? "/", origin);
    const pathname = decodeURIComponent(url.pathname);
    const candidate = pathname.endsWith("/")
      ? join(distDir, pathname, "index.html")
      : join(distDir, pathname);
    const filePath = normalize(candidate);

    if (!filePath.startsWith(distDir) || !existsSync(filePath)) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.setHeader("Content-Type", contentTypes[extname(filePath)] ?? "application/octet-stream");
    createReadStream(filePath).pipe(response);
  });

  return new Promise((resolveServer) => {
    server.listen(port, "127.0.0.1", () => resolveServer(server));
  });
}

function countPdfPages(filePath) {
  const pdf = readFileSync(filePath, "latin1");
  return [...pdf.matchAll(/\/Type\s*\/Page\b(?!s)/g)].length;
}

await run("npm", ["run", "build"]);

const server = await staticServer();

try {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 },
    deviceScaleFactor: 1,
  });

  await page.goto(`${origin}/cv/`, { waitUntil: "networkidle" });
  await page.pdf({
    path: output,
    printBackground: true,
    width: "210mm",
    height: "297mm",
    margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    scale: 0.98,
  });
  await browser.close();

  const pageCount = countPdfPages(output);
  const sizeKb = (statSync(output).size / 1024).toFixed(1);

  if (pageCount !== 1) {
    throw new Error(`Expected a one-page PDF, generated ${pageCount} pages instead.`);
  }

  console.log(`Generated public/cv-julien-bonavita.pdf (${sizeKb} KB, ${pageCount} page).`);
} finally {
  server.close();
}
