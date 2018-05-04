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

  describe '#categories' do
    it 'with a date, returns the formatted date' do
      portfolios = create_list(:portfolio, 5, categories: ['Frontend Integration'])
      expect(helper.categories(portfolios)).to eq(['Frontend Integration'])
    end
  end

  describe '#categories_as_class' do
    it 'with a date, returns the formatted date' do
      portfolio = create(:portfolio, categories: ['Frontend Integration'])
      expect(helper.categories_as_class(portfolio)).to eq('frontend-integration')
    end
  end
end