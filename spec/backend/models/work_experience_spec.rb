# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperience, type: :model do
  it { is_expected.to validate_presence_of(:company_name) }
  it { is_expected.to validate_presence_of(:position) }
  it { is_expected.to validate_presence_of(:city) }
  it { is_expected.to validate_presence_of(:country) }
  it { is_expected.to validate_presence_of(:start_date) }
  it { is_expected.to validate_presence_of(:locale) }

  it { is_expected.to have_db_index(:locale) }
  it { is_expected.to have_db_index(:order) }

  it 'has a valid factory' do
    expect(build(:work_experience)).to be_valid
  end

  describe '.country_name' do
    it 'country name if english name is provided' do
      about = create(:about, country: 'Netherlands')
      expect(about.country_name).to eq('Netherlands')
    end

    it 'country name if code is provided' do
      about = create(:about, country: 'NL')
      expect(about.country_name).to eq('Netherlands')
    end

    it 'equal country if portuguese name is provided' do
      about = create(:about, country: 'Holanda')
      expect(about.country_name).to eq('Holanda')
    end
  end
end
