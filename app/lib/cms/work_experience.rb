# frozen_string_literal: true

module Cms
  class WorkExperience < Cms::Base
    def model
      ::WorkExperience
    end

    protected

    def localized_attributes
      {
        position: :position,
        city: :city,
        country: :country,
        description: :description
      }
    end

    def attributes
      {
        company_name: :company,
        start_date: :start_date,
        end_date: :end_date,
        order: :order
      }
    end
  end
end
