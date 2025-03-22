#!/usr/bin/env sh

pnpm build
cd dist
echo "" > .nojekyll
echo "brin.is-a.dev" > CNAME

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/brinterwastaken/brinterwastaken.github.io.git main:gh-pages
cd ..
