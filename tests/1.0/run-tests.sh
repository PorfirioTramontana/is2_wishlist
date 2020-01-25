#!/bin/bash

docker run \
    -v $PWD/reports:/opt/robotframework/reports \
    -v $PWD/test-cases/robot:/opt/robotframework/tests \
    ppodgorsek/robot-framework:3.5.0