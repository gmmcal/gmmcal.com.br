# frozen_string_literal: true

source 'https://rubygems.org'

# Enforce minimum ruby version
ruby '~> 2.3'

# Application gems
# Use bootsnap to improve performance
gem 'bootsnap', require: false
# Contentful as CMS
gem 'contentful'
# use PostgreSQL as database
gem 'pg'
# Use puma as the app server
gem 'puma', group: %i[production]
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'

# Frontend gems
gem 'gon'
gem 'modernizr-rails'
# Use SCSS for stylesheets
gem 'sass-rails'
gem 'webpacker'

# Environment variables
gem 'dotenv-rails', group: %i[development test]

# Groups
group :development do
  # Spring speeds up development by keeping your application running in the
  # background. Read more: https://github.com/rails/spring
  gem 'foreman'
  gem 'i18n-js'
  gem 'listen'
  gem 'spring'
end

# Test suite
group :test do
  gem 'codeclimate-test-reporter'
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails'
  gem 'shoulda-matchers', require: false
  gem 'simplecov', require: false
end
