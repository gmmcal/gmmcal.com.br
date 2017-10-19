# frozen_string_literal: true

class Education < ApplicationRecord
  scope :ordered, -> { order(:order) }

  validates :course, presence: true
  validates :institution, presence: true
  validates :start_date, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
