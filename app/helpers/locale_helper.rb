# frozen_string_literal: true

module LocaleHelper
  def locale_to_language(locale)
    t(locale, scope: %i[i18n])
  end

  def available_locales
    I18n.available_locales - [I18n.locale]
  end

  def spoken_languages
    spoken_languages_list.join(', ')
  end

  private

  def spoken_languages_list
    I18n.available_locales.map { |locale| locale_to_language(locale) }
  end
end
