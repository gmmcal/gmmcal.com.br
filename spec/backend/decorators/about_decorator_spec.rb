# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AboutDecorator, type: :decorator do
  let(:about) { create(:about, country: 'NL').decorate }

  it 'returns CV url' do
    I18n.with_locale(:en) do
      expect(about.cv).to eq('/en/cv')
    end
  end

  it 'returns country name' do
    I18n.with_locale(:en) do
      expect(about.country).to eq('Netherlands')
    end
  end

  describe '#spoken_languages' do
    it 'returns en for english' do
      I18n.with_locale(:en) do
        expect(about.spoken_languages).to eq('English, Portuguese')
      end
    end

    it 'returns pt-BR for portuguese' do
      I18n.with_locale(:'pt-BR') do
        expect(about.spoken_languages).to eq('Inglês, Português')
      end
    end
  end
end
