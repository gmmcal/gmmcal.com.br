class Education < ApplicationRecord
  default_scope -> { order(:order) }

  validates :course, presence: true
  validates :location, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
