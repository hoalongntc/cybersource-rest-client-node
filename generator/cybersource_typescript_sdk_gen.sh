#!/bin/bash

modifiedSpec=`mktemp`
tmpSpec=`mktemp`

cp cybersource-rest-spec.json $tmpSpec
jq 'del(.paths | .["/microform/v2/sessions"]["x-name"], .["/microform/v2/sessions"]["x-description"])' $tmpSpec > $modifiedSpec

cp -f $modifiedSpec $tmpSpec
jq 'del(.paths | .["/up/v1/capture-contexts"]["x-name"], .["/up/v1/capture-contexts"]["x-description"])' $tmpSpec > $modifiedSpec

cp -f $modifiedSpec $tmpSpec
jq 'del(.paths | .["/up/v1/payment-details/{transientToken}"]["x-name"], .["/up/v1/payment-details/{transientToken}"]["x-description"])' $tmpSpec > $modifiedSpec

java -jar swagger-codegen-cli-2.4.30.jar generate -t cybersource-typescript-node -i $modifiedSpec -l typescript-node -o ../typescript -c cybersource-node-config.json

rm -f $modifiedSpec
rm -f $tmpSpec