# Reina Phoque — Portfolio

Personal portfolio for Reina Phoque (Prarawi): game design, UX/UI, illustration and 3D art, plus commission info.

Built with React 19, React Router and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/portfolioprarawi/ (the site is served under the repo name for GitHub Pages).

## Editing content

Almost all text lives in `src/data/content.js`:

- `PROJECTS`: showcase projects, their sections and images (images go in `src/assets/projects/<slug>/`)
- `SOCIALS`, `EDUCATION`, `EXPERIENCE`, `SKILLS`, `SOFTWARE`: About and Contact info
- `PRICE_SHEET`, `TOS_SECTIONS`: commission page

## Deploy

Pushing to `main` builds and publishes the site to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo settings, set **Pages → Source** to **GitHub Actions**.
If the repo is renamed, update `base` in `vite.config.js` to match.
