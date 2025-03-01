#!/bin/bash

out_dir=${1:-./ts}

echo -e "\x1b[1;32m[INFO]\x1b[m out_dir: ${out_dir}"

mkdir -p ${out_dir}
npx protoc --ts_out ${out_dir} --proto_path . ./nnextractor.proto
