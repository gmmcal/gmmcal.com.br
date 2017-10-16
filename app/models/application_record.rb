class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  scope :with_locale, -> (locale) { where(locale: locale) }
end
