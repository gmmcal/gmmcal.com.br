# frozen_string_literal: true

require 'rails_helper'

RSpec.describe LocaleHelper, type: :helper do
  describe '#locale_to_language' do
    it 'returns en for english' do
      I18n.with_locale(:en) do
        expect(helper.locale_to_language(:en)).to eq('English')
      end
    end

    it 'returns pt-BR for portuguese' do
      I18n.with_locale(:en) do
        expect(helper.locale_to_language(:'pt-BR')).to eq('Portuguese')
      end
    end
  end

  describe '#available_locales' do
    it 'returns en for english' do
      I18n.with_locale(:en) do
        expect(helper.available_locales).to eq([:'pt-BR'])
      end
    end

    it 'returns pt-BR for portuguese' do
      I18n.with_locale(:'pt-BR') do
        expect(helper.available_locales).to eq([:en])
      end
    end
  end
end
