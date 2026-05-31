# Skyrim Character Builder App

A React app version of the Skyrim Character Builder.

## Run locally

1. Open a terminal in `c:\Users\corey\Downloads\skyrim-character-builder-app`
2. Run `npm install`
3. Run `npm run dev`
4. Open the URL shown by Vite in your browser

## Files

- `src/App.jsx` — main app component copied from `Skyrim_Character_Builder_5.jsx`
- `src/main.jsx` — React entry point
- `src/index.css` — base global styles
- `index.html` — Vite HTML entry point
- `package.json` — project scripts and dependencies

## Deploy

This app is ready for static hosting.

### Netlify

1. Connect the repository or drag the `dist/` folder into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import the project in Vercel.
2. Set build command to `npm run build`.
3. Set output directory to `dist`.

### GitHub Pages

1. Initialize a Git repository in the project root.
2. Push to GitHub.
3. Enable GitHub Pages for the repository using the `gh-pages` branch or the `gh-pages` workflow below.

### GitHub Actions deployment

A GitHub Actions workflow has been added to build and deploy automatically when you push to `main`.

- Build command: `npm run build`
- Publish directory: `dist`
- Deployment branch: `gh-pages`

After pushing, GitHub Pages will publish the site automatically.
