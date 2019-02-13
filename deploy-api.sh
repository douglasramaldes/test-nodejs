#!/bin/bash

docker rm -f test_nodejs

docker rmi -f belezaWeb/test_nodejs

docker build -t belezaWeb/test_nodejs .

docker run --restart=always -d -p 3000:3000 \
        -e MONGO_HOST=DATABASEURL \
        --name test_nodejs belezaWeb/test_nodejs
# Change the variable values according to your environment