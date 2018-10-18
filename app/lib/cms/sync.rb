# frozen_string_literal: true

module Cms
  class Sync
    def self.all
      sync = client.sync(initial: true)
      sync.each_item do |resource|
        next unless resource.is_a? Contentful::Entry

        resource.save
      end
    end

    def self.find(id)
      client.entry(id, locale: '*')
    end

    def self.client
      Contentful::Client.new(contentful_config)
    end

    def self.contentful_config
      {
        space: credentials(:space),
        access_token: credentials(:token),
        gzip_encoded: false,
        entry_mapping: contentful_mapping_config,
      }
    end

    def self.contentful_mapping_config
      {
        'about' => About,
        'education' => Education,
        'skill' => Skill,
        'work_experience' => WorkExperience
      }
    end

    def self.credentials(field)
      credentials = Rails.application.credentials
      return credentials.contentful[field] if credentials.contentful.present?

      ENV["CONTENTFUL_#{field.upcase}"]
    end
  end
end
