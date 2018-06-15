# frozen_string_literal: true

source 'https://rubygems.org'

# Enforce minimum ruby version
ruby '~> 2.3'

# Application gems
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'
# use PostgreSQL as database
gem 'pg'
# Use puma as the app server
gem 'puma', group: %i[production]
# Contentful as CMS
gem 'contentful'
# Use bootsnap to improve performance
gem 'bootsnap', require: false

# Frontend gems
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'
gem 'modernizr-rails'
gem 'webpacker'
gem 'gon'

# Environment variables
gem 'dotenv-rails', group: %i[development test]

# Groups
group :development do
  # Spring speeds up development by keeping your application running in the
  # background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'listen'
  gem 'foreman'
  gem 'i18n-js'
end

# Test suite
group :test do
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails'
  gem 'shoulda-matchers', require: false
  gem 'simplecov', require: false
  gem 'codeclimate-test-reporter'
end
