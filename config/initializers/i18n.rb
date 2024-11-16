# frozen_string_literal: true

I18n.load_path += Rails.root.glob("config/locales/**/*.yml")
I18n.available_locales = %i[en pt-BR]
I18n.default_locale = :en
