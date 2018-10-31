# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DatesHelper, type: :helper do
  describe '#end_date' do
    it 'returns `currently` if no date is provided' do
      expect(helper.end_date(nil)).to eq('Currently')
    end

    it 'returns formated date if valid date is provided' do
      expect(helper.end_date('2018-01-01'.to_date)).to eq('Jan / 2018')
    end
  end
end
