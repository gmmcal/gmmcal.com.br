# frozen_string_literal: true

require 'simplecov'
require 'simplecov_json_formatter'
SimpleCov.start 'rails' do
  coverage_dir 'coverage/backend'
  skip 'seed_manager.rb'
  skip 'locale_input.rb'
  skip 'admin_helper.rb'
  group 'Decorators', 'app/decorators'
  group 'Policies', 'app/policies'
  group 'Listeners', 'app/listeners'
  minimum_coverage 90
  coverage(:line) { minimum 70, per: :file }
  formatter SimpleCov::Formatter::HTMLFormatter
end
