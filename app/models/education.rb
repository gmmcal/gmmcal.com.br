# frozen_string_literal: true

class Education < ApplicationRecord
  include Locatable

  scope :ordered, -> { order(:order) }

  validates :course, presence: true
  validates :institution, presence: true
  validates :start_date, presence: true
end
