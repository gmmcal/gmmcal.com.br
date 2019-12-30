# frozen_string_literal: true

require 'factory_bot_rails'
require 'faker'

FactoryBot.definition_file_paths = ['spec/backend/factories']
FactoryBot.find_definitions

class SeedManager
  def self.all
    log('Create About')
    create(:about, 1)
    log('Create Work Experiences')
    create(:work_experience, 5)
    log('Create Skills')
    create(:skill, 20)
    log('Create Educations')
    create(:education, 2, :finished)
  end

  def self.clear_cache
    log('Clearing cache')
    Rails.cache.clear
  end

  def self.clean
    log('Cleaning tables')
    tables = %i[about
                education
                skill
                work_experience]
    tables.each do |model|
      ActiveRecord::Base.connection.execute(
        "TRUNCATE #{model.to_s.tableize} RESTART IDENTITY CASCADE"
      )
    end
  end

  def self.create(model, quantity, trait = nil)
    I18n.available_locales.each do |locale|
      FactoryBot.create_list(model, quantity, trait, locale: locale)
    end
  end

  def self.user
    log('Create/Update default user')
    User.where(
      first_name: 'Gustavo',
      last_name: 'Cunha',
      email: 'email@example.com',
      default_locale: :en
    ).first_or_create(password: 'password2018')
  end

  def self.log(message)
    max_size = 79
    messages = []
    messages << '=' * 2
    messages << message
    messages << '=' * (max_size - 2 - messages.map(&:length).inject(:+))
    Rails.logger.info messages.join(' ')
  end
end
