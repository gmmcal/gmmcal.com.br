# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database
# with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the
# db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
