# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def country_name
    return '' unless try(:country)

    country_obj = ISO3166::Country.new(country)
    return country unless country_obj

    country_obj.translation(locale.to_s) || country_obj.name
  end
end
