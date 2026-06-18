# Deployment checklist

## Before publishing

- Confirm that the repository/account name does not reveal authorship during
  double-blind review.
- Keep the page author-free and do not add analytics, institutional logos, or
  identifying metadata. Also avoid personal Git commit author metadata; the
  included deployment script uses an anonymous repository-local identity.
- Confirm every video is cleared for public release.
- Add the final anonymous PDF only after checking that its title, numbers, and
  figures match the current manuscript.

## Publish with GitHub Pages

Create an empty repository, then run:

```bash
./deploy_github_pages.sh https://github.com/ANONYMOUS_OWNER/sarm-project-page.git
```

After the push, configure **Settings → Pages → Deploy from a branch → main →
/(root)**.

## Update the paper

Use the final public Pages address in the manuscript. For anonymous review, avoid
using a personal-account URL. Test the URL in a private/incognito browser before
submission.

## Post-acceptance

- Replace “Anonymous project page” with author and affiliation information.
- Remove the `noindex, nofollow` meta tag if search discoverability is desired.
- Add final paper, code, citation, and contact links.
