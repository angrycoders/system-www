set -e


source script/utils.sh


LOG_TITLE="deps"


log "listing installed pre-requisites" 0
log "node $(node --version)" 1
log "npm $(npm --version)" 1
log "$(ruby --version)" 1
log "$(wget --version | head -n 1 )" 1


log "installing jekyll" 0
gem install jekyll
log "$(jekyll --version)" 1


log "installing deps stated in package.json (using npm)" 0
npm install --production --prefix=lib
mv lib/node_modules/* lib/
rm -rf lib/node_modules


pushd lib
log "downloading reqwest (for ajax calls)" 0
wget -qO- https://raw.githubusercontent.com/ded/reqwest/master/reqwest.min.js
log "downloading superhero (bootstrap theme)" 0
wget -qO- https://bootswatch.com/superhero/bootstrap.min.css
mv bootstrap.min.css superhero.min.css
log "downloading animate.css (for animations)" 0
wget -qO- https://raw.github.com/daneden/animate.css/master/animate.css
popd

