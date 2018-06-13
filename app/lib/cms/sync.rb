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

    def self.client
      Contentful::Client.new(contentful_config)
    end

    def self.contentful_config
      {
        space: Rails.application.credentials[:contentful][:space],
        access_token: Rails.application.credentials[:contentful][:token],
        logger: ::Logger.new(STDOUT),
        gzip_encoded: false,
        entry_mapping: contentful_mapping_config
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
  end
end
