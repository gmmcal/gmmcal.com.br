# frozen_string_literal: true

module LocaleHelper
  def locale_to_language(locale)
    t(locale, scope: %i[i18n])
  end

  def available_locales
    I18n.available_locales - [I18n.locale]
  end
end
