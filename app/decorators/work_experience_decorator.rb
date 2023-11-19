# frozen_string_literal: true

class WorkExperienceDecorator < ApplicationDecorator
  delegate_all

  def country
    object.country_name
  end

  def start_date
    h.l object.start_date
  end

  def end_date
    h.end_date(object.end_date)
  end

  def description
    h.markdown(object.description)
  end

  def self.collection_decorator_class
    WorkExperiencesDecorator
  end
end
