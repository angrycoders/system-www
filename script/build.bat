REM This is a best-effort to keep up with build.sh for Windows

@echo off

echo "building to _out/ directory"
jekyll build --destination _out/

if %ERRORLEVEL% GEQ 1 echo "failed"

echo "finished successfully"

