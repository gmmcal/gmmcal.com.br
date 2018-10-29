# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do
  describe '#locale_to_language' do
    it 'returns en for english' do
      expect(helper.locale_to_language(:en)).to eq('en')
    end

    it 'returns pt-BR for portuguese' do
      expect(helper.locale_to_language(:'pt-BR')).to eq('pt-BR')
    end
  end

  describe '#markdown' do
    it 'returns empty string if nil is passed' do
      expect(helper.markdown(nil)).to eq('')
    end

    it 'returns html string if text is passed' do
      expect(helper.markdown('text')).to eq('<p>text</p>')
    end
  end
end
