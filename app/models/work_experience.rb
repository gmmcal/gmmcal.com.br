# frozen_string_literal: true

class WorkExperience < ApplicationRecord
  scope :ordered, -> { order(:order) }

  validates :company_name, presence: true
  validates :position, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :start_date, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
