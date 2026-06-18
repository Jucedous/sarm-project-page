# SARM project website

Static supplemental project page for the paper:

**Semantic-Aware Safety Evaluation and Planning**

The public page is deliberately dependency-free: HTML, CSS, JavaScript, JPEG
posters, and H.264 MP4 videos only.

## What was corrected

- The title and project framing now match the paper.
- The page now covers both evaluation tracks: navigation-style semantic
  transport and manipulation-style Cartesian transport.
- Both benchmark tables reproduce the values in the supplied paper source.
- Claims about hard constraints now match the paper's distinction between hard
  planning-time screening and separately reported dense-validation violations.
- The qualitative videos are explicitly separated from the seeded offline
  Cartesian benchmark.
- Stale per-video numerical claims were removed. The video overlays are labeled
  as online demo diagnostics rather than paper-table metrics.
- Internal report files and the unfinished paper PDF were intentionally excluded
  from the deployment package.

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages deployment

1. Create a new empty repository. For double-blind review, use an anonymous
   account or organization because a personal GitHub Pages URL/repository can
   reveal identity.
2. In this folder, run:

```bash
git init
git add .
git commit -m "Publish SARM project page"
git branch -M main
git remote add origin https://github.com/ANONYMOUS_OWNER/sarm-project-page.git
git push -u origin main
```

3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, then save.

The site will normally appear at:

```text
https://ANONYMOUS_OWNER.github.io/sarm-project-page/
```

The included `deploy_github_pages.sh` automates the local Git commands after the
empty repository has been created. To avoid leaking a personal global Git identity
during anonymous review, the script writes repository-local commit identity values
(`Anonymous` and `anonymous@users.noreply.github.com`). These can be overridden
with `SARM_GIT_NAME` and `SARM_GIT_EMAIL`.

## Review anonymity and indexing

The page currently contains:

```html
<meta name="robots" content="noindex, nofollow">
```

This asks compliant search engines not to index the public review page while
leaving it directly accessible by URL. It is not a confidentiality mechanism.
Remove that meta tag after acceptance if discoverability is desired.

## Optional paper link

The uploaded website included `SARM_paper_unfinished.pdf`; it was not copied to
this public package because it may not match the current paper source. When the
final anonymous PDF is ready, place it at `assets/paper/sarm-paper.pdf` and add a
visible link in `index.html`.
