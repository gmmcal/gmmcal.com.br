# frozen_string_literal: true

class About < Locatable
  validates :job_title, presence: true
  validates :description, presence: true
  has_rich_text :description
  scope :find_for_locale, ->(locale) { with_locale(locale).first_or_initialize }
end
