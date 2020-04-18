# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AboutDecorator, type: :decorator do
  let(:about) { create(:about, country: 'NL').decorate }

  it 'returns CV url' do
    I18n.locale = :en
    expect(about.cv).to eq('/en/cv')
  end

  it 'returns country name' do
    I18n.locale = :en
    expect(about.country).to eq('Netherlands')
  end
end
