# frozen_string_literal: true

class Skill < ApplicationRecord
  scope :ordered, -> { order(:order) }

  validates :name, presence: true
  validates :hero, presence: true
  validates :value, presence: true,
                    numericality: {
                      greater_than_or_equal_to: 0,
                      less_than_or_equal_to: 100
                    }
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
