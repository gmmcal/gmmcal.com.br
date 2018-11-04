# frozen_string_literal: true

User.where(
  first_name: 'Gustavo',
  last_name: 'Cunha',
  email: 'email@example.com',
  locale: :en
).first_or_create(password: 'password2018')

if Gem.loaded_specs.key?('factory_bot_rails')
  require 'factory_bot_rails'
  require 'faker'

  FactoryBot.definition_file_paths = ['spec/backend/factories']
  FactoryBot.find_definitions

  FactoryBot.create(:about, locale: 'en')
  FactoryBot.create(:about, locale: 'pt-BR')

  FactoryBot.create_list(:work_experience, 5, locale: 'en')
  FactoryBot.create_list(:work_experience, 5, locale: 'pt-BR')

  FactoryBot.create_list(:skill, 40, locale: 'en')
  FactoryBot.create_list(:skill, 40, locale: 'pt-BR')

  FactoryBot.create_list(:education, 2, locale: 'en')
  FactoryBot.create_list(:education, 2, locale: 'pt-BR')
end
