# frozen_string_literal: true

require 'rails_helper'

RSpec.describe About, type: :model do
  it { is_expected.to validate_presence_of(:job_title) }
  it { is_expected.to validate_presence_of(:description) }
  it { is_expected.to validate_presence_of(:cv) }
  it { is_expected.to validate_presence_of(:locale) }
  it { is_expected.to belong_to(:original).class_name('About').with_foreign_key(:translation_id).inverse_of(:translations).required(false) }
  it { is_expected.to have_many(:translations).class_name('About').with_foreign_key(:translation_id).inverse_of(:original).dependent(:destroy) }

  it 'has a valid factory' do
    expect(build(:about)).to be_valid
  end
end
