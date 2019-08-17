#!/bin/bash
set -e

# enter application path
cd /gustavocunha.dev

# create database (rails is smart and will not do anything if database is created)
bundle exec rake db:create

# keep database schema up-to-date
bundle exec rake db:migrate

# Remove a potentially pre-existing server.pid for Rails.
rm -f /gustavocunha.dev/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
