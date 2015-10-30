#!/bin/sh
##
# @author Eduard Bess <eduard.bess@fashionforhome.de>
#
# @copyright (c) 2014 by fashion4home GmbH <www.fashionforhome.de>
# @license GPL-3.0
# @license http://opensource.org/licenses/GPL-3.0 GNU GENERAL PUBLIC LICENSE
#
# @version 1.0.0

GIT_URI="https://f4hautouser:DOza2bKTMkbvEUFC9Ndsx6U@bitbucket.org/fashion4home/jslogger.git"

if [ -z "$1" ]
then
	TMP_PATH='/tmp/jslogger'
else
	TMP_PATH=$1
fi

if [ -z "$2" ]
then
	DST_PATH='/home/ubuntu/jslogger'
else
	DST_PATH=$2
fi

# create tmp dir
sudo mkdir -p $TMP_PATH

# clone the repo if
sudo git clone $GIT_URI $TMP_PATH

# go to tmp folder
cd $TMP_PATH

# update composer stuff
composer self-update
composer update

# npm
npm install

# run grunt deployment
grunt deploy --tmp-path=$TMP_PATH --dst-path=$DST_PATH

# go to production folder and delete tmp folder
cd $DST_PATH
sudo rm -r $TMP_PATH

echo "JsLogger deployed!"