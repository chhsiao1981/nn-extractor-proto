#!/bin/bash

out_dir=${1:-./python}

echo -e "\x1b[1;32m[INFO]\x1b[m out_dir: ${out_dir}"

mkdir -p ${out_dir}
protoc --proto_path=./ --python_out=${out_dir} ./nnextractor.proto
