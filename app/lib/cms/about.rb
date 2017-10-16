module Cms
  class About < Cms::Base
    def model
      ::About
    end

    protected

      def update_file_fields(locale)
        @data.cv = self.cv.fields_with_locales[:file][locale].url
      end

      def localized_attributes
        {
          job_title: :job_title,
          description: :description,
          city: :city,
          country: :country,
        }
      end

      def attributes
        {
          phone_number: :phone_number,
          email: :email,
        }
      end
  end
end
