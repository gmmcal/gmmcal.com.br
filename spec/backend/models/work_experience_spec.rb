# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperience, type: :model do
  it { is_expected.to validate_presence_of(:company_name) }
  it { is_expected.to validate_presence_of(:position) }
  it { is_expected.to validate_presence_of(:city) }
  it { is_expected.to validate_presence_of(:country) }
  it { is_expected.to validate_presence_of(:start_date) }
  it { is_expected.to validate_presence_of(:locale) }
  it { is_expected.to belong_to(:original).class_name('About').with_foreign_key(:translation_id).inverse_of(:translations).required(false) }
  it { is_expected.to have_many(:translations).class_name('About').with_foreign_key(:translation_id).inverse_of(:original).dependent(:destroy) }

  it { is_expected.to have_db_index(:contentful_id) }
  it { is_expected.to have_db_index(:locale) }
  it { is_expected.to have_db_index(:order) }
  it { is_expected.to have_db_index(:translation_id) }

  it 'has a valid factory' do
    expect(build(:work_experience)).to be_valid
  end
end
