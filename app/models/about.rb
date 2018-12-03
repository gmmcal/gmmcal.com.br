# frozen_string_literal: true

class About < ApplicationRecord
  include Locatable
  has_one_attached :cv

  validates :job_title, presence: true
  validates :description, presence: true
  validates :cv, presence: true

  def self.find_for_locale(locale)
    with_locale(locale).first_or_initialize
  end
end
