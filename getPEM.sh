#!/usr/bin/env bash
if [ "$NETLIFY" = true ]; then
	echo 'Build On Netlify, writing PEM File'
	printenv GITHUB_PRIVATEKEY | base64 -d >github.pem
else
	echo 'Build Not On Netlify, writing PEM File'
	printenv GITHUB_PRIVATEKEY >github.pem
fi
