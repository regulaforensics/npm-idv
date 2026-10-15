#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open ios/IDV.xcworkspace
else
    npx expo run:ios --device --no-bundler "$@"
fi
