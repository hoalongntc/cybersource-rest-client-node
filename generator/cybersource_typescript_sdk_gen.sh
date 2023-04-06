#!/bin/bash

java -jar swagger-codegen-cli-2.4.30.jar generate -t cybersource-typescript-node -i cybersource-rest-spec.json -l typescript-node -o ../typescript -c cybersource-node-config.json