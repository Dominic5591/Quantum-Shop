#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -o errexit
# Treat unset variables and parameters other than the special parameters ‘@’ or ‘*’ as an error
set -o nounset
# Prevent errors in a pipeline from being masked
set -o pipefail

# Install gems
bundle install

# Run database migrations
rails db:migrate

# Reset database (use with caution)
DISABLE_DATABASE_ENVIRONMENT_CHECK=1 bundle exec rails db:reset
