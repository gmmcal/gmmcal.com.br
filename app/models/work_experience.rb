# frozen_string_literal: true

class WorkExperience < Locatable
  scope :ordered, -> { order(:order) }
  scope :find_for_locale, ->(locale) { ordered.with_locale(locale) }

  validates :company_name, presence: true
  validates :position, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :start_date, presence: true
end
