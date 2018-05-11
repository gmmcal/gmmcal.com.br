require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do
  before(:all) do
    I18n.locale = I18n.default_locale
  end

  describe '#ldate' do
    it 'with a date, returns the formatted date' do
      date = Date.new(2017, 01, 01)
      expect(helper.ldate(date)).to eq('Jan / 2017')
    end

    it 'with nil, returns Currently' do
      date = nil
      expect(helper.ldate(date)).to eq('Currently')
    end
  end
end
