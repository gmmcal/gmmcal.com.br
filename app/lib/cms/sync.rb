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
      Contentful::Client.new(
        space: ENV['CONTENTFUL_SPACE'],
        access_token: ENV['CONTENTFUL_TOKEN'],
        entry_mapping: {
          'about' => About,
          'education' => Education,
          'portfolio' => Portfolio,
          'skill' => Skill,
          'work_experience' => WorkExperience,
        }
      )
    end
  end
end
