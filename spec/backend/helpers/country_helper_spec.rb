# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CountryHelper, type: :helper do
  describe '#country_name' do
    it 'country name if english name is provided' do
      expect(helper.country_name('Netherlands')).to eq('Netherlands')
    end

    it 'country name if code is provided' do
      expect(helper.country_name('NL')).to eq('Netherlands')
    end

    it 'equal country if portuguese name is provided' do
      expect(helper.country_name('Holanda')).to eq('Holanda')
    end
  end
end
