# frozen_string_literal: true

source 'https://rubygems.org'

# Enforce minimum ruby version
ruby '2.6.0' if ENV['RAILS_ENV'] == 'production'

# Application gems
# Use bootsnap to improve performance
gem 'bootsnap', require: false
# use PostgreSQL as database
gem 'pg'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
gem 'rails-i18n'

# Frontend gems
gem 'gon'
gem 'modernizr-rails'
# Use SCSS for stylesheets
gem 'sass-rails'
gem 'uglifier'
gem 'webpacker',
    git: 'https://github.com/rails/webpacker',
    branch: :master

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
  gem 'foreman'
  gem 'i18n-debug'
  gem 'i18n-js'
  gem 'listen'
  gem 'spring'
end

# Test suite
group :test do
  gem 'database_cleaner'
  gem 'rspec-rails'
  gem 'rubocop-rspec'
  gem 'shoulda-matchers',
      git: 'https://github.com/thoughtbot/shoulda-matchers',
      branch: :master,
      require: false
  gem 'simplecov', require: false
end

group :production do
  gem 'aws-sdk-s3', require: false
  # Use puma as the app server
  gem 'puma'
  gem 'redis'
end
