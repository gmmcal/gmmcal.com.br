# frozen_string_literal: true

class About < Locatable
  validates :job_title, presence: true
  validates :description, presence: true

  def self.find_for_locale(locale)
    with_locale(locale).includes(:cv_blob).first_or_initialize
  end

  def as_json(_options = {})
    {
      job_title: job_title,
      description: description,
      city: city,
      phone_number: phone_number,
      email: email,
      cv: cv_path,
      country: country_name
    }
  end
end
