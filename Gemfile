# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Enforce minimum ruby version
ruby '3.0.0' if ENV['RAILS_ENV'] == 'production'

# Application gems
# Use bootsnap to improve performance
gem 'bootsnap', require: false
# use PostgreSQL as database
gem 'pg'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1.4'

# Frontend gems
gem 'draper'
# Use SCSS for stylesheets
gem 'sass-rails'
gem 'uglifier'
gem 'webpacker'
gem 'wicked_pdf'

# Admin gems
gem 'devise'
gem 'kramdown'
gem 'pundit'
gem 'simple_form'

# Fake Data gems
gem 'factory_bot_rails', require: false
gem 'faker', require: false

# Groups
group :development do
  # gem 'i18n-debug'
  gem 'brakeman'
  gem 'listen'
  gem 'reek'
  gem 'rubocop'
  gem 'rubocop-rails'
  gem 'rubocop-rspec'
  gem 'scss_lint', require: false
  gem 'wkhtmltopdf-binary'
end

# Test suite
group :test do
  gem 'database_cleaner'
  gem 'rspec-rails'
  gem 'shoulda-matchers', require: false
  gem 'simplecov', require: false
end

group :test, :development do
  gem 'cypress-on-rails'
end

group :production do
  # Use puma as the app server
  gem 'puma'
  gem 'rack-cors'
  gem 'redis'
  gem 'wkhtmltopdf-heroku'
end
