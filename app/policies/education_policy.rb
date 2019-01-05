# frozen_string_literal: true

class EducationPolicy < ApplicationPolicy
  def permitted_attributes
    %i[course institution description start_date end_date locale]
  end
end
