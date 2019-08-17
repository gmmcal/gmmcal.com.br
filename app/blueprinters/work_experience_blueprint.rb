# frozen_string_literal: true

class WorkExperienceBlueprint < Blueprinter::Base
  field :company_name
  field :position
  field :city
  field :description
  field :start_date
  field :end_date
  field :country
end
