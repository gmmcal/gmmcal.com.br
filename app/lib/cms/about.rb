# frozen_string_literal: true

module Cms
  class About < Cms::Base
    def model
      ::About
    end

    protected

    def localized_attributes
      {
        job_title: :job_title,
        description: :description,
        city: :city,
        country: :country
      }
    end

    def attributes
      {
        phone_number: :phone_number,
        email: :email
      }
    end

    def file_fields
      {
        cv: :cv
      }
    end
  end
end
