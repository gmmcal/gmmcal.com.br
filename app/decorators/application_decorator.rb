# frozen_string_literal: true

class ApplicationDecorator < Draper::Decorator
  def as_json(_options = {})
    model = object.class
    klass = "#{model}Blueprint".constantize
    klass.render_as_json(self)
  end
end
