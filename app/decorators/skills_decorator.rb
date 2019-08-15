# frozen_string_literal: true

class SkillsDecorator < Draper::CollectionDecorator
  def cv
    order_items.slice(0, 10)
  end

  private

  def order_items
    sort { |left, right| right.value <=> left.value }
  end
end
