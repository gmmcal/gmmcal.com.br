# frozen_string_literal: true

module Cms
  class Base < Contentful::Entry
    def save
      available_locales.each do |locale|
        @data = model.find_or_initialize_by(contentful_id: id, locale: locale)
        set_localized_attributes
        set_attributes
        update_file_fields(locale)
        @data.save
      end
    end

    protected

    def update_file_fields(locale); end

    def localized_attributes
      {}
    end

    def attributes
      {}
    end

    private

    def set_localized_attributes
      localized_attributes.each do |app_attribute, cms_attribute|
        @data[app_attribute] = fields_with_locales.dig(cms_attribute, locale)
      end
    end

    def set_attributes
      attributes.each do |app_attribute, cms_attribute|
        @data[app_attribute] =
          fields_with_locales.dig(cms_attribute, default_locale)
      end
    end

    def available_locales
      %i[en 'pt-BR']
    end

    def default_locale
      available_locales.first
    end
  end
end
