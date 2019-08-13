# frozen_string_literal: true

class About < Locatable
  validates :job_title, presence: true
  validates :description, presence: true

  def self.find_for_locale(locale)
    with_locale(locale).includes(:cv_blob).first_or_initialize
  end
end
