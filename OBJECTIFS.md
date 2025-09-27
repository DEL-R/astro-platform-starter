# Objectifs de portfolio

Date: 2025-09-27

## Sprint en cours (semaine 1)

1) Recomposition de la grille d'accueil
- Pourquoi: occuper la page par une mosaïque responsive type carrelage.
- DoD: la grille couvre l'écran >= 1024px sans scroll initial; images bien recadrées; mobile/tablette lisibles.
- Tâches:
  - Ajuster `hero-grid` (areas/rows) et tuiles dans `src/styles/globals.css` et `src/pages/index.astro`.
  - Vérifier tailles/`object-fit` des images.
- Validation: audit Lighthouse rapide + inspection responsive.

2) Bloc CV téléchargeable
- Pourquoi: valoriser le profil.
- DoD: `public/cv.pdf` présent; tuile "CV" sur l'accueil + lien header; téléchargement OK.
- Tâches:
  - Ajouter la tuile dans `src/pages/index.astro`.
  - Ajouter un lien optionnel dans `src/components/Header.astro`.
- Validation: clic ouvre/télécharge le PDF.

3) Filtres de projets par tags
- Pourquoi: meilleure UX et logique front simple.
- DoD: boutons (Tous + tags détectés) qui affichent/masquent les cartes; clavier OK.
- Tâches:
  - UI de filtre dans `src/pages/projets.astro`.
  - Logique (vanilla JS ou petite island).
- Validation: navigation clavier + focus visible.

## Catalogue des pistes (12 idées détaillées)

1) Recomposer la grille d'accueil (EN COURS)
- Quoi: tester plusieurs schémas d'`areas` (portrait pleine hauteur, 2x3, 3x3).
- Où: `src/styles/globals.css` (hero-grid), `src/pages/index.astro` (tuiles).

2) Bloc CV / à télécharger (EN COURS)
- Quoi: `public/cv.pdf`, tuile dédiée + lien header.
- Où: `src/pages/index.astro`, `src/components/Header.astro`.

3) Projets filtrables par tags (EN COURS)
- Quoi: boutons de filtre, masquage/affichage, accessibilité clavier.
- Où: `src/pages/projets.astro`.

4) Thème clair/sombre pastel
- Pourquoi: confort visuel.
- Quoi: toggle qui change des variables CSS et mémorise la préférence.
- Où: `src/styles/globals.css`, `src/components/Header.astro`.

5) Micro-animations subtiles
- Pourquoi: dynamiser sans alourdir.
- Quoi: hover mesuré, reveal on scroll, transitions.
- Où: `globals.css` (transitions), scripts légers dans `index.astro`.

6) Accessibilité renforcée (A11y)
- Pourquoi: bonnes pratiques pro.
- Quoi: contraste, focus, skip-link, rôles ARIA, alt descriptifs.
- Où: `src/layouts/Layout.astro`, `src/components/Header.astro`, pages avec images.

7) SEO et métadonnées sociales
- Pourquoi: partage propre.
- Quoi: title/description, Open Graph/Twitter, image de partage.
- Où: `src/layouts/Layout.astro` ou composant `Seo.astro`.

8) Page "Veille" (mini-blog)
- Pourquoi: montrer l'apprentissage.
- Quoi: fichiers Markdown, rendu via composant Markdown ou Content Collections.
- Où: `src/pages/veille/`.

9) Études de cas détaillées
- Pourquoi: expliquer tes choix techniques.
- Quoi: pages contexte → solution → impact, captures et extraits de code.
- Où: `src/pages/cas/` + liens depuis Projets.

10) Formulaire Contact enrichi
- Pourquoi: meilleures demandes.
- Quoi: champs sujet/type, messages clairs, page de succès.
- Où: `src/pages/contact.astro` (+ `contact/success.astro`).

11) Optimisation images et performance
- Pourquoi: vitesse et qualité.
- Quoi: `astro:assets Image` pour certaines images, tailles responsives, preload fontes.
- Où: pages avec images, `src/layouts/Layout.astro`.

12) Finitions de marque
- Pourquoi: identité visuelle.
- Quoi: typo secondaire, palette alternative, favicon/logo.
- Où: `src/styles/globals.css`, `public/favicon.svg`, `src/components/Header.astro`.

## Suivi et méthode
- Rythme: 2–3 chantiers/semaine.
- Revue: captures desktop/mobile + notes techniques.
- Critères globaux: lisibilité, cohérence visuelle, performance, accessibilité.

## Notes récentes
- Monogramme: tester différentes orientations de scanlines (0°, 45°, 90°) par variante.
- Accent global: l’accent de logo sert désormais de couleur secondaire du site (tokens `--accent*` via `data-accent`).
