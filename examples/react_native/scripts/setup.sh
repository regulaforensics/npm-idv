#!/usr/bin/env bash
set -e

npm install
expo prebuild

mkdir -p android/app/src/main/assets/Regula
mv android/app/src/main/res/raw/regula.license android/app/src/main/assets/Regula/
mv android/app/src/main/res/raw/db.dat android/app/src/main/assets/Regula/
