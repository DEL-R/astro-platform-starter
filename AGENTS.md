# Repository Guidelines

## Project Structure & Module Organization
- Source in `src/`:
  - `src/pages/`: routes (`.astro` pages, `api/*.ts` endpoints).
  - `src/components/`: UI components (`.astro`).
  - `src/pages/blobs/_components/`: React UI (`.tsx`).
  - `src/layouts/`, `src/styles/globals.css`, `src/utils.ts`, `src/types.ts`.
- Static assets in `public/`.
- Netlify Edge Functions in `netlify/edge-functions/`.
- Config: `astro.config.mjs`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `netlify link` — link to a Netlify site (once).
- `netlify dev` — local dev with Edge Functions/Blobs at `http://localhost:8888`.
- `npm run dev` — Astro dev server at `http://localhost:4321`.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the production build.
<<<<<<< HEAD
- `npm run check` - Astro/TypeScript diagnostics.
=======
- `npm run check` — Astro/TypeScript diagnostics.


## Coding Style & Naming Conventions
- Prettier enforced: 4‑space indent, single quotes, no trailing commas, 160‑char width (`.prettierrc`). Markdown/YAML use 2 spaces.
- Components: PascalCase files for `.astro`/`.tsx` (e.g., `src/components/Header.astro`).
- Pages/routes: kebab-case under `src/pages` (e.g., `image-cdn.astro`).
- API routes: TypeScript in `src/pages/api`, export `GET`/`POST`, set `export const prerender = false` when needed.

## Testing Guidelines
- No formal test suite. Validate locally by:
  - Running `netlify dev` and exercising pages.
  - Hitting APIs, e.g.: `curl -s http://localhost:8888/api/blobs` or POST JSON to `/api/blobs`.
  - Ensuring `npm run build && npm run preview` works.

## Commit & Pull Request Guidelines
- Use Conventional Commits (seen in history): `fix:`, `chore:`, `build:` with optional scopes (e.g., `fix(deps): ...`).
- PRs should include: clear description, linked issues, screenshots for UI, and notes on env/config changes. Ensure the build/preview pass.

## Security & Configuration Tips
- Environment via `.env`/Netlify; never commit secrets. `PUBLIC_DISABLE_UPLOADS=true` disables uploads locally.
- Avoid secrets in client code or `public/`.

## Agent-Specific Notes
- Keep changes minimal and in-repo style; do not reformat unrelated files. Prefer existing patterns in `.astro`, React components, and utilities. Verify Netlify features with `netlify dev` before submitting.

