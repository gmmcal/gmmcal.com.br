require 'rails_helper'

RSpec.describe Portfolio, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:caption) }
  it { should validate_presence_of(:thumbnail) }
  it { should validate_presence_of(:image) }
  it { should validate_presence_of(:categories) }
  include_examples "validates locale and contentful_id"

  it 'has a valid factory' do
    expect(build(:portfolio)).to be_valid
  end

  describe '#full_title' do
    it 'should return title and caption' do
      portfolio = create(:portfolio)

      expect(portfolio.full_title).to eq("#{portfolio.title} - #{portfolio.caption}")
    end
  end
end
