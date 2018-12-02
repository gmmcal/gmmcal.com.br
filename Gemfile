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
gem 'rails-i18n'
gem 'redis', group: %i[production]

# Frontend gems
gem 'gon'
gem 'modernizr-rails'
# Use SCSS for stylesheets
gem 'sass-rails'
gem 'uglifier'
gem 'webpacker'

# Environment variables
gem 'dotenv-rails', group: %i[development test]

# Admin gems
gem 'country_select'
gem 'devise'
gem 'i18n-debug', group: :development
gem 'kramdown'
gem 'pundit'
gem 'simple_form'

# Groups
group :development do
  # Spring speeds up development by keeping your application running in the
  # background. Read more: https://github.com/rails/spring
  gem 'i18n-js'
  gem 'listen'
end

# Test suite
group :test do
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails'
  gem 'rubocop-rspec'
  gem 'shoulda-matchers',
      git: 'https://github.com/thoughtbot/shoulda-matchers',
      branch: :master,
      require: false
  gem 'simplecov', require: false
  gem 'vcr', require: false
  gem 'webmock', require: false
end
