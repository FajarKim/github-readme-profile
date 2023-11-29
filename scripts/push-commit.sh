#!/bin/bash
set -x
set -e

git --version
git config --global user.email "${AUTHOR_EMAIL}"
git config --global user.name "${AUTHOR_NAME}"
git config --global --add safe.directory ${GITHUB_WORKSPACE}
if [[ "$(git status --porcelain)" != "" ]]; then
  git add --all
  git commit --message "${MESSAGE}"
  git remote add master https://${PERSONAL_TOKEN}@github.com/${GH_REPO}.git
  git push -f
fi
