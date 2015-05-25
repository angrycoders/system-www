set -e


source script/utils.sh


LOG_TITLE="start-server"


log "cleaning up _site/" 0
rm -rf _site/


log "starting server (using jekyll)" 0
jekyll serve

