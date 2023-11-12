#!/bin/bash
set -x
set -e

export BRANCH_NAME=updated-theme-readme
git --version
git config --global user.email "86386385+FajarKim@users.noreply.github.com"
git config --global user.name "Rangga Fajar Oktariansyah"
git config --global --add safe.directory ${GITHUB_WORKSPACE}
git branch -d $BRANCH_NAME || true
git checkout -b $BRANCH_NAME
git add --all
git commit --message "docs(theme): auto update theme readme"
git remote add origin-$BRANCH_NAME https://${PERSONAL_TOKEN}@github.com/${GH_REPO}.git
git push --force --quiet --set-upstream origin-$BRANCH_NAME $BRANCH_NAME
