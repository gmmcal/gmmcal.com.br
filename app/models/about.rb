class About < ApplicationRecord
  scope :with_locale, -> (locale) { find_by(locale: locale) }

  validates :job_title, presence: true
  validates :description, presence: true
  validates :cv, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
