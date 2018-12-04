# frozen_string_literal: true

class About < ApplicationRecord
  include Locatable
  has_one_attached :cv

  validates :job_title, presence: true
  validates :description, presence: true
  validates :cv, presence: true

  def self.find_for_locale(locale)
    with_locale(locale).first_or_initialize
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

  private

  def cv_path
    return '' unless cv.attached?

    Rails.application.routes.url_helpers.rails_blob_path(cv, only_path: true)
  end
end
