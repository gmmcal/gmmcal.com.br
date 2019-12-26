# frozen_string_literal: true

require 'rails_helper'

RSpec.describe About, type: :model do
  it { is_expected.to validate_presence_of(:job_title) }
  it { is_expected.to validate_presence_of(:description) }
  it { is_expected.to validate_presence_of(:locale) }

  it { is_expected.to have_db_index(:locale) }

  it 'has a valid factory' do
    expect(build(:about)).to be_valid
  end

  describe '.country_name' do
    before do
      I18n.locale = :en
    end

    it 'country name if code is provided' do
      about = create(:about, country: 'NL')
      expect(about.country_name).to eq('Netherlands')
    end
  end
end
