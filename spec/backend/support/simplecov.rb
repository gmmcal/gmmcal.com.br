# frozen_string_literal: true

require 'simplecov'
SimpleCov.start 'rails' do
  coverage_dir 'coverage/backend'
  add_filter 'seed_manager.rb'
  add_filter 'locale_input.rb'
  add_group 'Blueprints', 'app/blueprinters'
  add_group 'Decorators', 'app/decorators'
  add_group 'Policies', 'app/policies'
  minimum_coverage 90
  minimum_coverage_by_file 70
end
