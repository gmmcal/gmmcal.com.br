# frozen_string_literal: true

source 'https://rubygems.org'

# Enforce minimum ruby version
ruby '2.6.3' if ENV['RAILS_ENV'] == 'production'

# Application gems
# Use bootsnap to improve performance
gem 'bootsnap', require: false
# use PostgreSQL as database
gem 'pg'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.0.rc1'
gem 'rails-i18n'

# Frontend gems
gem 'gon'
gem 'modernizr-rails'
# Use SCSS for stylesheets
gem 'sass-rails'
gem 'uglifier'
gem 'webpacker'

# Admin gems
gem 'country_select'
gem 'devise'
gem 'kramdown'
gem 'pundit'
gem 'simple_form'

# Fake Data gems
gem 'factory_bot_rails', require: false
gem 'faker', require: false

# Groups
group :development do
  gem 'brakeman'
  gem 'i18n-debug'
  gem 'i18n-js'
  gem 'listen'
  gem 'reek'
  gem 'spring'
end

# Test suite
group :test do
  gem 'database_cleaner'
  gem 'rspec-rails'
  gem 'rubocop-performance'
  gem 'rubocop-rspec'
  gem 'shoulda-matchers', require: false
  gem 'simplecov', require: false
end

group :production do
  gem 'aws-sdk-s3', require: false
  # Use puma as the app server
  gem 'puma'
  gem 'redis'
end
