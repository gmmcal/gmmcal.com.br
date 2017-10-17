module Cms
  class Portfolio < Cms::Base
    def model
      ::Portfolio
    end

    protected

      def update_file_fields(_locale)
        @data.thumbnail = self.thumbnail.fields_with_locales[:file][default_locale].url
        @data.image = self.image.fields_with_locales[:file][default_locale].url
      end

      def localized_attributes
        {
          title: :title,
          caption: :caption,
          thumbnail: :thumbnail,
          image: :image,
          categories: :categories,
        }
      end

      def attributes
        {
          url: :url,
          order: :order,
        }
      end
  end
end
