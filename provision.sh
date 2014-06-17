#!/bin/sh

yes | apt-get install python-software-properties
yes | apt-add-repository ppa:chris-lea/node.js
yes | apt-get update

yes | apt-get install nodejs
yes | apt-get install npm

echo "Node Installed"

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
yes | sudo apt-get install mongodb-org

sudo /etc/init.d/mongod start