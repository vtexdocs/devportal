#!/usr/bin/env bash
[ ! -f .env.local ] || set -a && source .env.local && set +a
if [ "$NETLIFY" = true ]; then
	echo 'Build On Netlify, writing PEM File'
	printenv GITHUB_PRIVATEKEY | base64 -d >github.pem
else
	echo 'Build Not On Netlify, writing PEM File'
	printenv GITHUB_PRIVATEKEY | sed 's/\\n/\n/g' > github.pem
fi
