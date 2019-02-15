# frozen_string_literal: true

class Locatable < ApplicationRecord
  self.abstract_class = true
  after_save :expire_cache

  scope :with_locale, ->(locale) { where(locale: locale) }

  validates :locale, presence: true

  private

  def expire_cache
    Rails.cache.delete("#{locale}/#{model_name.singular}")
    Rails.cache.delete("#{locale}/#{model_name.plural}")
  end
end
