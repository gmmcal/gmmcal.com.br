# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Country, type: :library do
  it 'returns all countries with their ISO code' do
    I18n.with_locale(:en) do
      expect(described_class.all).to eq [%w[Brazil BR], %w[Netherlands NL], %w[Portugal PT], ['United States', 'US']]
    end
  end
end
