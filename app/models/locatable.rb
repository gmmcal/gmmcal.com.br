# frozen_string_literal: true

class Locatable < ApplicationRecord
  self.abstract_class = true

  scope :with_locale, ->(locale) { where(locale: locale) }

  validates :locale, presence: true
end
