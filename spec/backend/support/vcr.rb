# frozen_string_literal: true

require 'vcr'

def sensitive_strings
  %w[CONTENTFUL_SPACE CONTENTFUL_TOKEN]
end

VCR.configure do |c|
  c.hook_into :webmock
  c.cassette_library_dir = 'spec/backend/vcr'
  c.configure_rspec_metadata!
  c.allow_http_connections_when_no_cassette = false
  c.default_cassette_options = {
    record: :none
  }

  sensitive_strings.each do |key|
    manifestations = {
      CGI.escape(ENV[key]) => "[#{CGI.escape(key)}]",
      ENV[key] => "[#{key}]"
    }
    manifestations.each_pair do |string, replacement|
      c.filter_sensitive_data(replacement) { string }
    end
  end
end
