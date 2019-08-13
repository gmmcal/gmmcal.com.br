# frozen_string_literal: true

class EducationsDecorator < Draper::CollectionDecorator
  def cv
    slice(0, 2)
  end
end
