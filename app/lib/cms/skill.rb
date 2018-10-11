# frozen_string_literal: true

module Cms
  class Skill < Cms::Base
    protected

    def localized_attributes
      {
        name: :name
      }
    end

    def attributes
      {
        value: :value
      }
    end
  end
end
