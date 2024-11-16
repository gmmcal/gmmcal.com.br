# frozen_string_literal: true

namespace :db do
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
