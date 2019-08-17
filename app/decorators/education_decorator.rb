# frozen_string_literal: true

class EducationDecorator < ApplicationDecorator
  delegate_all

  def start_date
    h.l object.start_date
  end

  def end_date
    h.end_date(object.end_date)
  end

  def self.collection_decorator_class
    EducationsDecorator
  end
end
