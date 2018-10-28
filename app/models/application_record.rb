# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  # TODO: Move to a concern?
  belongs_to :original,
             class_name: 'About',
             foreign_key: :translation_id,
             inverse_of: :translations,
             required: false
  has_many :translations,
           class_name: 'About',
           foreign_key: :translation_id,
           inverse_of: :original,
           dependent: :destroy

  self.abstract_class = true
  scope :with_locale, ->(locale) { where(locale: locale) }

  validates :locale, presence: true
end
