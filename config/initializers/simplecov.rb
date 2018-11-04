# frozen_string_literal: true

if Rails.env.test?
  require 'simplecov'
  SimpleCov.start 'rails' do
    coverage_dir 'coverage/backend'
    minimum_coverage 90
    minimum_coverage_by_file 70
  end
end
