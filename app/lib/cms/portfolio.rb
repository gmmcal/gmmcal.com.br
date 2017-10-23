# frozen_string_literal: true

module Cms
  class Portfolio < Cms::Base
    def model
      ::Portfolio
    end

    protected

    def localized_attributes
      {
        title: :title,
        caption: :caption,
        thumbnail: :thumbnail,
        image: :image,
        categories: :categories
      }
    end

    def attributes
      {
        url: :url,
        order: :order
      }
    end

    def file_fields
      {
        thumbnail: :thumbnail,
        image: :image
      }
    end
  end
end
