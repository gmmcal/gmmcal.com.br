# frozen_string_literal: true

namespace :db do
  task staging: :environment do
    %i[about education skill work_experience].each do |model|
      ActiveRecord::Base.connection.execute(
        "TRUNCATE #{model.to_s.tableize} RESTART IDENTITY"
      )
    end
    Cms::Sync.all
  end

  namespace :cache do
    task clear: :environment do
      Rails.cache.clear
    end
  end
end
