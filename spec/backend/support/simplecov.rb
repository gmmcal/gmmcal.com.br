# frozen_string_literal: true

require 'simplecov'
SimpleCov.start 'rails' do
  coverage_dir 'coverage/backend'
  minimum_coverage 90
  minimum_coverage_by_file 70
end
