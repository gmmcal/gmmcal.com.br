# frozen_string_literal: true

require 'rails_helper'

RSpec.describe LocaleHelper, type: :helper do
  describe '#locale_to_language' do
    before do
      I18n.locale = :en
    end

    it 'returns en for english' do
      expect(helper.locale_to_language(:en)).to eq('English')
    end

    it 'returns pt-BR for portuguese' do
      expect(helper.locale_to_language(:'pt-BR')).to eq('Portuguese')
    end
  end

  describe '#available_locales' do
    it 'returns en for english' do
      I18n.locale = :en
      expect(helper.available_locales).to eq([:'pt-BR'])
    end

    it 'returns pt-BR for portuguese' do
      I18n.locale = :'pt-BR'
      expect(helper.available_locales).to eq([:en])
    end
  end

  describe '#spoken_languages' do
    it 'returns en for english' do
      I18n.locale = :en
      expect(helper.spoken_languages).to eq('English, Portuguese')
    end

    it 'returns pt-BR for portuguese' do
      I18n.locale = :'pt-BR'
      expect(helper.spoken_languages).to eq('Inglês, Português')
    end
  end
end
