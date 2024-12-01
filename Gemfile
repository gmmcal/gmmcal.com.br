# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Enforce minimum ruby version
ruby file: ".ruby-version"

# Application gems
# Use bootsnap to improve performance
gem "bootsnap", require: false
# use PostgreSQL as database
gem "pg"
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 8.0.0"

# Frontend gems
gem "draper"
# Use SCSS for stylesheets
gem "importmap-rails"
gem "sprockets-rails"

# CV PDF generation
gem "matrix"
gem "prawn"

# Admin gems
gem "kramdown"
gem "pundit"
gem "simple_form"

# Fake Data gems
gem "factory_bot_rails", require: false
gem "faker", require: false

gem "turbo-rails"

# Use the database-backed adapters for Rails.cache, Active Job, and Action Cable
gem "solid_cable"
gem "solid_cache"
gem "solid_queue"

# Groups
group :development do
  gem "brakeman"
  gem "bundler-audit"
  gem "listen"
  gem "reek"
  gem "rubocop-factory_bot", require: false
  gem "rubocop-rails-omakase", require: false
  gem "rubocop-rspec", require: false
  gem "rubocop-rspec_rails", require: false
  gem "scss_lint", require: false
end

# Test suite
group :test do
  gem "database_cleaner-active_record"
  gem "rspec-rails"
  gem "shoulda-matchers", require: false
  gem "simplecov", require: false
end

group :test, :development do
  gem "cypress-on-rails"
end

group :production, :staging do
  # Use puma as the app server
  gem "puma"
  gem "rack-cors"
  gem "thruster", require: false
end

gem "bcrypt"
