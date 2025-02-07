# frozen_string_literal: true

class Country
  class_attribute :available, default: %w[br nl pt us]
  attr_reader :country

  def initialize(country)
    @country = country.upcase if country.present?
  end

  def name
    return nil if country.blank?

    I18n.t(country.downcase, scope: :countries)
  end

  def to_a
    [ name, @country ]
  end

  class << self
    def all
      available.map { |country| Country.new(country).to_a }
    end

    def random
      available.sample.upcase
    end
  end
end
