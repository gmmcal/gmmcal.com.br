# frozen_string_literal: true

require 'simplecov'
require 'simplecov_json_formatter'
SimpleCov.start 'rails' do
  coverage_dir 'coverage/backend'
  add_filter 'seed_manager.rb'
  add_filter 'locale_input.rb'
  add_filter 'admin_helper.rb'
  add_group 'Decorators', 'app/decorators'
  add_group 'Policies', 'app/policies'
  add_group 'Listeners', 'app/listeners'
  minimum_coverage 90
  minimum_coverage_by_file 70
  formatter SimpleCov::Formatter::HTMLFormatter
end
