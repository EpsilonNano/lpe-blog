# LPE Blog

A lightweight, statically hosted publication built with Astro and deployed to GitHub Pages.

## For writers

You only need to edit files in `src/content/blog/`.

1. Copy `src/content/blog/template.md`.
2. Rename it something short and unique, for example `2026-05-homecoming.md`.
3. Edit the YAML at the top:
   - `title`
   - `description`
   - `publishDate`
   - `author`
   - `tags`
   - `draft`: set to `false` when the story is ready
4. Write the story below the second `---`.
5. Commit and push.

## Adding images

Put image files in `src/content/blog/images/`.

**In the body of a post**, reference them with a relative path. They will render at the content width with rounded corners:

```markdown
![Short description](./images/your-image.jpg)
```

**As a thumbnail** on the home page card, add an optional `thumbnail:` field in the frontmatter:

```yaml
thumbnail: ./images/your-thumb.jpg
```

Do not edit `src/pages/`, `src/components/`, or `src/layouts/` unless you are changing the site itself.

## For maintainers

The site name and description shown across the site are set in `src/site.ts`.

### Deployment

The site is configured for `EpsilonNano/lpe-blog` and deploys automatically
to GitHub Pages on every push to `main`.

If you fork this repository for a different site:

1. Change `site` and `base` in `astro.config.mjs` to match your username and repo name.
2. Run `npm install` and commit `package-lock.json`.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.

### Local development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## Theme

The site follows the operating system’s light or dark color scheme using `prefers-color-scheme`. There is no toggle, no cookie, and no client-side storage.