#!/bin/sh -l
set -e

APPLICATION_ID=$1
API_KEY=$2
FILE=$3

# remove docsearch-scraper directory
rm -rf ./docsearch-scraper


if [ -e ./.env ]
then
  export $(grep "^NEXT_PUBLIC_ALGOLIA_APP_ID\|^NEXT_PUBLIC_ALGOLIA_WRITE_KEY" .env)
fi

if [ -z "${NEXT_PUBLIC_ALGOLIA_APP_ID}" ] || [ -z "${NEXT_PUBLIC_ALGOLIA_WRITE_KEY}" ]
then
  echo "❌ Required keys are missing in your .env file"
  exit 1
fi

# build from the main source repository
git clone https://github.com/vtexdocs/docsearch-scraper.git

cp ./algolia/scraper_md.json ./docsearch-scraper/configs
cp ./algolia/scraper_openapi.json ./docsearch-scraper/configs

cd docsearch-scraper/

# install specific version of pipenv
pip3 install pipenv==2018.11.26

# download chromedriver

chromedriverStableVersion=$(curl -s 'https://chromedriver.storage.googleapis.com/LATEST_RELEASE')

wget -q "https://chromedriver.storage.googleapis.com/${chromedriverStableVersion}/chromedriver_linux64.zip"

unzip chromedriver_linux64.zip
chmod +x chromedriver

# create the .env file for docsearch
echo "APPLICATION_ID=${NEXT_PUBLIC_ALGOLIA_APP_ID}
API_KEY=${NEXT_PUBLIC_ALGOLIA_WRITE_KEY}
CHROMEDRIVER_PATH=./chromedriver
" > .env

PIPENV_VENV_IN_PROJECT=true pipenv install

pipenv run ./docsearch run ./configs/scraper_openapi.json

pipenv run ./docsearch run ./configs/scraper_md.json

echo "🚀 Successfully indexed and uploaded the results to Algolia"

cd ..

# remove docsearch-scraper directory
rm -rf ./docsearch-scraper