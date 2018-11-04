# frozen_string_literal: true

module Locatable
  extend ActiveSupport::Concern

  included do
    scope :with_locale, ->(locale) { where(locale: locale) }

    validates :locale, presence: true
  end
end
