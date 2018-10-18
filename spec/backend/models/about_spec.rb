# frozen_string_literal: true

require 'rails_helper'

RSpec.describe About, type: :model do
  it { is_expected.to validate_presence_of(:job_title) }
  it { is_expected.to validate_presence_of(:description) }
  it { is_expected.to validate_presence_of(:cv) }
  it { is_expected.to validate_presence_of(:locale) }
  it { is_expected.to validate_presence_of(:contentful_id) }

  it 'has a valid factory' do
    expect(build(:about)).to be_valid
  end
end
