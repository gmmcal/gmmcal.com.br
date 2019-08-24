# frozen_string_literal: true

if defined?(Rack::Cors) && ENV['CORS_HOSTS'].present?
  Rails.configuration.middleware.insert_before 0, Rack::Cors do
    allow do
      origins ENV['CORS_HOSTS'].split(',')
      resource '/assets/*'
    end
  end
end
