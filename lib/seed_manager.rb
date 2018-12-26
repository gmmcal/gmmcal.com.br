# frozen_string_literal: true

require 'factory_bot_rails'
require 'faker'

FactoryBot.definition_file_paths = ['spec/backend/factories']
FactoryBot.find_definitions

class SeedManager
  def self.all
    create(:about, 1)
    create(:work_experience, 5)
    create(:skill, 40)
    create(:education, 2)
  end

  def self.create(model, quantity)
    I18n.available_locales.each do |locale|
      FactoryBot.create_list(model, quantity, locale: locale)
    end
  end
end
