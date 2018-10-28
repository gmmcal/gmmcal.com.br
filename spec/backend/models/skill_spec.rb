# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Skill, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:value) }
  it { is_expected.to validate_numericality_of(:value).is_greater_than_or_equal_to(0) }
  it { is_expected.to validate_numericality_of(:value).is_less_than_or_equal_to(100) }
  it { is_expected.to validate_presence_of(:locale) }
  it { is_expected.to belong_to(:original).class_name('About').with_foreign_key(:translation_id).inverse_of(:translations).required(false) }
  it { is_expected.to have_many(:translations).class_name('About').with_foreign_key(:translation_id).inverse_of(:original).dependent(:destroy) }

  it 'has a valid factory' do
    expect(build(:skill)).to be_valid
  end
end
