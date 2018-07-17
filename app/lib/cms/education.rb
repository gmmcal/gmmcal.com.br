# frozen_string_literal: true

module Cms
  class Education < Cms::Base
    protected

    def localized_attributes
      {
        course: :course,
        institution: :institution,
        description: :description
      }
    end

    def attributes
      {
        start_date: :start_date,
        end_date: :end_date,
        order: :order
      }
    end
  end
end
