# frozen_string_literal: true

module LocaleHelper
  def locale_to_language(locale)
    locale.to_s
  end

  def available_locales
    I18n.available_locales - [I18n.locale]
  end
end
