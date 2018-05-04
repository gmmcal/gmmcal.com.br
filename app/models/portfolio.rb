# frozen_string_literal: true

class Portfolio < ApplicationRecord
  scope :ordered, -> { order(:order) }

  validates :title, presence: true
  validates :caption, presence: true
  validates :thumbnail, presence: true
  validates :image, presence: true
  validates :categories, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true

  def full_title
    "#{title} - #{caption}"
  end
end
