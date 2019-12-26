# frozen_string_literal: true

class Country
  class_attribute :available, default: %w[br nl pt]
  attr_reader :country

  def initialize(country)
    @country = country.upcase
  end

  def name
    return nil if country.blank?

    I18n.t(country.downcase, scope: :countries)
  end

  def to_a
    [name, @country]
  end

  class << self
    def all
      available.map { |country| Country.new(country).to_a }
    end

    def random
      available.sample
    end
  end
end
