# frozen_string_literal: true

module CountryHelper
  def country_name(code)
    country = ISO3166::Country.new(code)
    return code unless country

    country.translation(I18n.locale.to_s) || country.name
  end
end
