#!/bin/sh
git submodule update common
ln -s $(pwd)/common/includes $(pwd)/_includes
