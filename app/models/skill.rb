class Skill < ApplicationRecord
  default_scope -> { order(:order) }

  validates :name, presence: true
  validates :hero, presence: true
  validates :value,  presence: true, numericality: {greater_than_or_equal_to: 0}
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
