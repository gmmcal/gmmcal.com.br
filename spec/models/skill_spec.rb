# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Skill, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:hero) }
  it { is_expected.to validate_presence_of(:value) }
  it { is_expected.to validate_numericality_of(:value).is_greater_than_or_equal_to(0) }
  it { is_expected.to validate_numericality_of(:value).is_less_than_or_equal_to(100) }
  it { is_expected.to validate_presence_of(:locale) }
  it { is_expected.to validate_presence_of(:contentful_id) }

  it 'has a valid factory' do
    expect(build(:skill)).to be_valid
  end
end
