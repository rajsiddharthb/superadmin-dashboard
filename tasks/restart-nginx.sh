#!/usr/bin/env bash

PATH=/home/ec2-user/.nvm/versions/node/v12.14.0/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/home/ec2-user/.local/bin:/home/ec2-user/bin
HOME=/home/ec2-user
NVM_BIN=/home/ec2-user/.nvm/versions/node/v12.14.0/bin

source /home/ec2-user/.bash_profile
echo "hello"

sudo service nginx restart
