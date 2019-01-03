# frozen_string_literal: true

namespace :db do
  namespace :cache do
    task clear: :environment do
      Rails.cache.clear
    end
  end

  task clean: :environment do
    ActiveStorage::Attachment.all.each(&:purge)
    tables = %i[about
                active_storage_attachments
                active_storage_blobs
                education
                skill
                work_experience]
    tables.each do |model|
      ActiveRecord::Base.connection.execute(
        "TRUNCATE #{model.to_s.tableize} RESTART IDENTITY"
      )
    end
  end

  namespace :seed do
    task all: %i[clean seed environment] do
      require 'seed_manager'

      SeedManager.all
    end

    task :test, %i[model quantity] => %i[clean environment] do |_task, args|
      require 'seed_manager'

      model = args[:model]
      quantity = args[:quantity].to_i

      SeedManager.create(model, quantity)
    end
  end
end
