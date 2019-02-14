# frozen_string_literal: true

class WorkExperience < Locatable
  scope :ordered, -> { order(:order) }
  scope :find_for_locale, ->(locale) { ordered.with_locale(locale) }

  validates :company_name, presence: true
  validates :position, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :start_date, presence: true

  def as_json(_options = {})
    {
      company_name: company_name,
      position: position,
      city: city,
      description: description,
      start_date: start_date,
      end_date: end_date,
      country: country_name
    }
  end
end
