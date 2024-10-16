#!/bin/sh

set -e

if [ ! -d "node_modules" ]; then
  yarn install
fi

yarn dev
