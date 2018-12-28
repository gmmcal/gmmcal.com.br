# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Education, type: :model do
  it { is_expected.to validate_presence_of(:course) }
  it { is_expected.to validate_presence_of(:institution) }
  it { is_expected.to validate_presence_of(:start_date) }
  it { is_expected.to validate_presence_of(:locale) }

  it { is_expected.to have_db_index(:locale) }
  it { is_expected.to have_db_index(:order) }

  it 'has a valid factory' do
    expect(build(:education)).to be_valid
  end
end
