# frozen_string_literal: true

module Cms
  class Skill < Cms::Base
    def model
      ::Skill
    end

    protected

    def localized_attributes
      {
        name: :name,
        hero: :hero
      }
    end

    def attributes
      {
        value: :value,
        order: :order
      }
    end
  end
end
