# frozen_string_literal: true

module Cms
  class Base < Contentful::Entry
    def save
      available_locales.each do |locale|
        @data = model.find_or_initialize_by(contentful_id: id, locale: locale)
        update_localized_attributes(locale)
        update_attributes
        update_file_fields(locale)
        @data.save!
      end
    end

    protected

    def localized_attributes
      {}
    end

    def attributes
      {}
    end

    def file_fields
      {}
    end

    private

    def update_localized_attributes(locale)
      localized_attributes.each do |app_attribute, cms_attribute|
        @data[app_attribute] = fields_with_locales.dig(cms_attribute, locale)
      end
    end

    def update_attributes
      attributes.each do |app_attribute, cms_attribute|
        @data[app_attribute] =
          fields_with_locales.dig(cms_attribute, default_locale)
      end
    end

    def update_file_fields(locale)
      file_fields.each do |app_attribute, cms_attribute|
        @data[app_attribute] = url_for_field(locale, cms_attribute)
      end
    end

    def url_for_field(locale, attribute)
      asset = fields_with_locales.dig(attribute, locale)
      asset.fields_with_locales.dig(:file, locale).url
    end

    def available_locales
      I18n.available_locales
    end

    def default_locale
      I18n.default_locale
    end
  end
end
