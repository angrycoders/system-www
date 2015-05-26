set -e


source script/utils.sh


LOG_TITLE="build"


log "building to _out/ directory" 0
jekyll build --destination _out/

[ $? ] || {
  log "failed" 2
  exit $?
}

log "finished successfully" 1

