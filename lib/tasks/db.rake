# frozen_string_literal: true

namespace :db do
  namespace :migrate do
    task databases: :environment do
      Rails.logger.info("==> Migrate primary database")
      Rake::Task["db:migrate:primary"].execute
      Rails.logger.info("==> Load cable schema")
      Rake::Task["db:schema:load:cable"].execute
      Rails.logger.info("==> Load cache schema")
      Rake::Task["db:schema:load:cache"].execute
      Rails.logger.info("==> Load queue schema")
      Rake::Task["db:schema:load:queue"].execute
    end
  end

  namespace :cache do
    task clear: :environment do
      require "seed_manager"

      SeedManager.clear_cache
    end
  end

  task clean: :environment do
    require "seed_manager"

    SeedManager.clean
  end

  namespace :seed do
    task all: %i[clean seed environment] do
      require "seed_manager"

      SeedManager.all
    end

    task :test, %i[model quantity] => %i[clean environment] do |_task, args|
      require "seed_manager"

      model = args[:model]
      quantity = args[:quantity].to_i

      SeedManager.create(model, quantity)
    end
  end
end
