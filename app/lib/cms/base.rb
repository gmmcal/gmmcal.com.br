# frozen_string_literal: true

module Cms
  class Base < Contentful::Entry
    def save
      available_locales.each do |locale|
        data = get_instance(locale)
        data = update_localized_attributes(data, locale)
        data = update_model_attributes(data)
        data = update_file_fields(data, locale)
        data.save!
      end
    end

    def model
      model_mapping[sys[:content_type].id]
    end

    protected

    def model_mapping
      {
        'about' => ::About,
        'education' => ::Education,
        'skill' => ::Skill,
        'work_experience' => ::WorkExperience
      }
    end

    def file_fields
      {}
    end

    def get_instance(locale)
      model.find_or_initialize_by(contentful_id: id, locale: locale)
    end

    def download_file(url)
      open("https:#{url}")
    end

    private

    def update_localized_attributes(data, locale)
      localized_attributes.each do |app_attribute, cms_attribute|
        data[app_attribute] = fields_with_locales.dig(cms_attribute, locale)
      end
      data
    end

    def update_model_attributes(data)
      attributes.each do |app_attribute, cms_attribute|
        data[app_attribute] =
          fields_with_locales.dig(cms_attribute, default_locale)
      end
      data
    end

    def update_file_fields(data, locale)
      file_fields.each do |app_attribute, cms_attribute|
        file_url = url_for_field(locale, cms_attribute)
        filename = file_url.split('/').last
        file = download_file(file_url)
        data.send(app_attribute).attach(io: file, filename: filename)
      end
      data
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
