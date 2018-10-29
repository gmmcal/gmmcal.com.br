# frozen_string_literal: true

class WorkExperiencePolicy < ApplicationPolicy
  def permitted_attributes
    %i[
      company_name
      position
      city
      country
      start_date
      description
      locale
      translation_id
    ]
  end
end
