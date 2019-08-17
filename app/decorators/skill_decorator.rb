# frozen_string_literal: true

class SkillDecorator < ApplicationDecorator
  delegate_all

  def value
    object.value.to_i
  end

  def self.collection_decorator_class
    SkillsDecorator
  end
end
