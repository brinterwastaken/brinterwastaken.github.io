yarn build
cd dist
echo "" > .nojekyll
echo "brin.is-a.dev" > CNAME

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/xXTgamerXx/xXTgamerXx.github.io.git main:gh-pages
cd ..