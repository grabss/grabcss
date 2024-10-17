#!/bin/sh

set -e

cd dev

if [ ! -d "node_modules" ]; then
  yarn install
fi

yarn dev
