#!/usr/bin/env bash
set -e

[[ " $* " == *" --open "* || " $* " == *" -o "* ]] &&
    open ios/IDV.xcworkspace ||
    npx expo run:ios --device --no-bundler "$@"
