class Education < ApplicationRecord
  default_scope -> { order(:order) }

  validates :course, presence: true
  validates :institution, presence: true
  validates :start_date, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
