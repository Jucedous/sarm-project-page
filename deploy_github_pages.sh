#!/usr/bin/env bash
set -euo pipefail

REMOTE_URL="${1:-}"

if [[ -z "$REMOTE_URL" ]]; then
  echo "Usage: $0 https://github.com/OWNER/REPOSITORY.git" >&2
  exit 2
fi

if [[ ! -f index.html ]]; then
  echo "Run this script from the website root (the folder containing index.html)." >&2
  exit 2
fi

if [[ ! -d .git ]]; then
  git init
fi

# Repository-local identity prevents an existing personal global Git identity from
# appearing in an anonymous-review repository. Override through environment vars.
git config user.name "${SARM_GIT_NAME:-Anonymous}"
git config user.email "${SARM_GIT_EMAIL:-anonymous@users.noreply.github.com}"

git add .

if ! git diff --cached --quiet; then
  git commit -m "Publish SARM project page"
fi

git branch -M main

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

git push -u origin main

cat <<'EOF'

Push complete.
Now open the repository on GitHub and configure:
Settings -> Pages -> Deploy from a branch -> main -> /(root) -> Save
EOF
