set -e


source script/utils.sh


LOG_TITLE="deps"


log "installing composer" 2
log "installing jekyll" 2

log "installing node_modules as libraries" 0
npm install
mv node_modules/* lib/

pushd lib
log "downloading reqwest (for ajax calls)" 0
wget https://raw.githubusercontent.com/ded/reqwest/master/reqwest.min.js
log "downloading superhero (bootstrap theme)" 0
wget https://bootswatch.com/superhero/bootstrap.min.css
mv bootstrap.min.css superhero.min.css
log "downloading animate.css (for animations)" 0
wget https://raw.github.com/daneden/animate.css/master/animate.css
popd

