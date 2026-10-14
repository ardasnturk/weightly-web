# Weightly – website

Landing page, privacy policy and support page for the Weightly iOS app: https://weightly.ardasnturk.com

- React 19, Vite, Tailwind CSS, react-i18next (en, tr, de, es, it, fr; bundled translations in `src/locales`)
- Routes: `/`, `/privacy` (linked from the app and App Store), `/support` (App Store support URL)
- `scripts/postbuild.mjs` copies `index.html` to each route and `404.html` so deep links work on GitHub Pages

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
npm run deploy   # publishes dist/ to the gh-pages branch (custom domain from public/CNAME)
```
