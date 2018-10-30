# frozen_string_literal: true

module CountryHelper
  def country_name(code_or_name)
    country = find_country(code_or_name)
    return code_or_name unless country

    country.translation(I18n.locale.to_s) || country.name
  end

  private

  def find_country(code_or_name)
    return ISO3166::Country.new(code_or_name) if code_or_name.length == 2

    ISO3166::Country.find_country_by_name(code_or_name)
  end
end
