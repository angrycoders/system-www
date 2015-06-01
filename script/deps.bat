REM This is a best-effort to keep up with deps.sh for Windows
REM Please help ensure it doesn't break and is up to date


echo "listing installed pre-requisites"
echo "  node"
node --version
echo "  npm"
npm --version
echo "  ruby"
ruby --version
echo "  wget"
wget --version


echo "installing jekyll"
gem install jekyll
echo "  jekyll"
jekyll --version


echo "installing deps stated in package.json (using npm)" 0
npm install --production --prefix=lib
mv lib/node_modules/* lib/
rm -rf lib/node_modules


cd lib
echo "downloading reqwest (for ajax calls)"
wget -qO- https://raw.githubusercontent.com/ded/reqwest/master/reqwest.min.js
echo "downloading superhero (bootstrap theme)"
wget -qO- https://bootswatch.com/superhero/bootstrap.min.css
mv bootstrap.min.css superhero.min.css
echo "downloading animate.css (for animations)"
wget -qO- https://raw.github.com/daneden/animate.css/master/animate.css
cd ..

