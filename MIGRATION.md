Follow these notes when migrating GitHub Pages to a custom domain

- Vite base is now set to `/` in `vite.config.ts` for root-based hosting.
- Add and configure your custom domain in the repository Settings → Pages (GitHub will create/manage the CNAME).
- Recommended routing: switch to `HashRouter` in React to avoid SPA refresh issues on GitHub Pages.

Quick commands (run locally):

```bash
# build and deploy
npm run build
npm run deploy
```

Failure recovery:
- If something breaks, revert `vite.config.ts` base to the repo path (e.g. `/repo-name/`) and redeploy.
