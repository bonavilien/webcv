# Design

## System

Site CV one-page Astro, statique, sans framework JS client. Direction visuelle : dossier de campagne premium + cockpit éditorial. La page doit rester rapide et scannable, avec un rythme plus affirmé qu'un CV classique.

## Color Palette

Palette dual-theme en OKLCH, stratégie "Committed" : les deux modes partagent la même identité violet/ultraviolet. Le light mode utilise un fond blanc pur et des surfaces violet très claires ; le dark mode reprend la base violet très sombre d'origine. Le toggle doit changer la luminosité et la densité, pas la personnalité de marque.

```css
:root {
  --color-bg: oklch(1 0 0);
  --color-ink: oklch(0.17 0.035 305);
  --color-muted: oklch(0.43 0.04 305);
  --color-surface: oklch(0.965 0.012 305);
  --color-line: oklch(0.84 0.025 305);
  --color-primary: oklch(0.52 0.17 304);
  --color-primary-strong: oklch(0.2 0.08 306);
  --color-primary-soft: oklch(0.93 0.05 304);
  --color-accent: oklch(0.54 0.19 285);
  --color-accent-soft: oklch(0.92 0.06 285);
  --color-on-dark: oklch(0.985 0 0);
}

:root[data-theme="dark"] {
  --color-bg: oklch(0.115 0.04 305);
  --color-ink: oklch(0.965 0.012 305);
  --color-muted: oklch(0.77 0.035 305);
  --color-surface: oklch(0.165 0.045 305);
  --color-line: oklch(0.32 0.045 305);
  --color-primary: oklch(0.56 0.18 304);
  --color-primary-strong: oklch(0.18 0.07 306);
  --color-primary-soft: oklch(0.29 0.1 305);
  --color-accent: oklch(0.62 0.2 285);
  --color-accent-soft: oklch(0.28 0.09 285);
}
```

## Typography

Direction typographique : une seule famille système/sans-serif via `Manrope`, `Aptos`, `Segoe UI`, puis fallbacks système. Le site n'embarque plus de police custom locale. `--font-display` et `--font-sans` partagent cette base pour garder une hiérarchie nette et légère. Le hero utilise une échelle display contenue, sans letter-spacing négatif excessif. Les paragraphes sont limités à 65-75ch.

## Layout

One-page à ancres fixes dans l'ordre : Hero, Signal fort, Projets, Expériences, Compétences, À propos, Contact. Hero en grille asymétrique avec bloc portrait violet/ultraviolet ou fallback initiales. Les sections principales alternent entre fond neutre, surface violet clair en light mode et bandes violet sombres pour rythmer la lecture. Cartes utilisées seulement pour les projets et items répétés.

## Tokens

Les styles partagés vivent dans `src/styles/global.css`. Les tokens `--color-*` sont sémantiques : `--color-on-dark-*` pour les textes sur fonds sombres, `--color-on-primary-*` pour les surfaces primaires, `--color-border-*` pour les séparateurs et contours. Les espacements globaux utilisent `--page-gutter`, `--page-gutter-mobile`, `--header-height` et `--space-section`. Les cibles tactiles passent par `--target-touch` et `--target-action`; les transitions par `--motion-fast`, `--motion-base` et `--motion-slow`.

## Components

- `Hero` : nom, positionnement, phrase valeur, tags, CTA, portrait/fallback.
- `SignalStrip` : 4 preuves rapides, très scannables.
- `ProjectCard` : visuel local optimisé, type de livrable, rôle, contexte, preuve, compétences et lien de preuve.
- `ExperienceItem` : poste, organisation, période, 3 bullets maximum.
- `SkillMatrix` : problèmes résolus et outils associés.
- `About` : paragraphe court + signaux personnels utiles.
- `ContactLinks` : email et LinkedIn uniquement.
- `ThemeToggle` intégré au header : bouton natif, persistance `localStorage`, fallback sur `prefers-color-scheme`.

## Motion

Interactions sobres : transitions de focus/hover rapides sur liens, boutons et cartes. Aucun reveal bloquant. Respect complet de `prefers-reduced-motion`.

## Accessibility

Contraste élevé, focus rings visibles, liens explicites, HTML sémantique, un seul `h1`, `aria-label` pour la navigation principale, skip link, ancres avec `scroll-margin-top`. Les textes doivent rester lisibles sans image portrait.
