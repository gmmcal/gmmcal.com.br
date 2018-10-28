# frozen_string_literal: true

class Skill < ApplicationRecord
  scope :random, -> { order(Arel::Nodes::NamedFunction.new('RANDOM', [])) }

  validates :name, presence: true
  validates :value, presence: true,
                    numericality: {
                      greater_than_or_equal_to: 0,
                      less_than_or_equal_to: 100
                    }
end
