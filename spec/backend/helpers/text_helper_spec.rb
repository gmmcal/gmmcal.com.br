# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TextHelper, type: :helper do
  describe '#markdown' do
    it 'returns empty string if nil is passed' do
      expect(helper.markdown(nil)).to eq('')
    end

    it 'returns html string if text is passed' do
      expect(helper.markdown('text').squish).to eq('<p>text</p>')
    end
  end
end
