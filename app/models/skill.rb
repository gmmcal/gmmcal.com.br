# frozen_string_literal: true

class Skill < Locatable
  scope :random, -> { order(Arel::Nodes::NamedFunction.new("RANDOM", [])) }
  scope :find_for_locale, ->(locale) { random.with_locale(locale) }

  validates :name, presence: true
  validates :value, presence: true,
                    numericality: {
                      greater_than_or_equal_to: 0,
                      less_than_or_equal_to: 100
                    }
end
