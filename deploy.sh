# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f git@github.com:Cito2310/traffic-light-f1-reaction.git main:gh-pages

cd -