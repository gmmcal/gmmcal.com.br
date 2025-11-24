# frozen_string_literal: true

class Education < Locatable
  scope :ordered, -> { order(:order) }
  scope :find_for_locale, ->(locale) { ordered.with_locale(locale) }

  validates :course, presence: true
  validates :institution, presence: true
  validates :start_date, presence: true
  has_rich_text :description
end
