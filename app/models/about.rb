# frozen_string_literal: true

class About < ApplicationRecord
  validates :job_title, presence: true
  validates :description, presence: true
  validates :cv, presence: true

  # FIXME: this method is too attached to About logic. It would be better to come with a more generic solution
  def self.find_for_locale(locale)
    object = with_locale(locale).first_or_initialize
    if locale != I18n.default_locale
      object.original = with_locale(I18n.default_locale).first
    end
    object
  end

  def to_s
    job_title
  end
end
