# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it { is_expected.to validate_presence_of(:first_name) }
  it { is_expected.to validate_presence_of(:last_name) }
  it { is_expected.to validate_presence_of(:email_address) }
  it { is_expected.to validate_presence_of(:password) }
  it { is_expected.to validate_presence_of(:default_locale) }

  it 'has a valid factory' do
    expect(build(:user)).to be_valid
  end
end
