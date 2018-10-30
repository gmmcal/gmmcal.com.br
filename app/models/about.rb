# frozen_string_literal: true

class About < ApplicationRecord
  validates :job_title, presence: true
  validates :description, presence: true
  validates :cv, presence: true

  def self.find_for_locale(locale)
    with_locale(locale).first_or_initialize
  end
end
