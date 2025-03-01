#!/bin/bash

out_dir=${1:-./es6}

echo -e "\x1b[1;32m[INFO]\x1b[m out_dir: ${out_dir}"

mkdir -p ${out_dir}
protoc --js_out=import_style=es6,binary:${out_dir} ./nnextractor.proto
