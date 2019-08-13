# frozen_string_literal: true

class SkillsDecorator < Draper::CollectionDecorator
  def cv
    top.slice(0, 10)
  end

  private

  def top
    sort { |x, y| y.value <=> x.value }
  end
end
