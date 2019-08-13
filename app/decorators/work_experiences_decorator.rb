# frozen_string_literal: true

class WorkExperiencesDecorator < Draper::CollectionDecorator
  def cv
    slice(0, 3)
  end
end
