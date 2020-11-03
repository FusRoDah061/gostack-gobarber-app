#!/usr/bin/env bash

# Create .env file for AppCenter builds
# Requires NODE_ENV variable set to production (or development)
echo "Source dir is $APPCENTER_SOURCE_DIRECTORY"

# $API_URL and $NODE_ENV need to be set on AppCenter's build environment variables
echo "API_URL=$API_URL" >> $APPCENTER_SOURCE_DIRECTORY/.env.$NODE_ENV
