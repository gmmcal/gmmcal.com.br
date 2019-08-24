if defined? Rack::Cors
  Rails.configuration.middleware.insert_before 0, Rack::Cors do
    allow do
      origins ENV['CORS_HOSTS'].split(',')
      resource '/assets/*'
    end
  end
end
