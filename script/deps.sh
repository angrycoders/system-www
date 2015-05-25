set -e


source script/utils.sh


LOG_TITLE="deps"


log "installing composer" 2
log "installing jekyll" 2

log "installing node_modules as libraries" 0
npm install
mv node_modules/* lib/

log "installing reqwest" 0
pushd lib
wget https://raw.githubusercontent.com/ded/reqwest/master/reqwest.min.js
popd

