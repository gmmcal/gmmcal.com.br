# frozen_string_literal: true

class AboutPolicy < ApplicationPolicy
  def index?
    true
  end

  def permitted_attributes
    %i[
      job_title
      description
      city
      country
      phone_number
      email
      locale
    ]
  end
end
