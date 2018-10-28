# frozen_string_literal: true

class WorkExperience < ApplicationRecord
  scope :ordered, -> { order(:order) }

  validates :company_name, presence: true
  validates :position, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :start_date, presence: true
end
