require 'rails_helper'

RSpec.describe Education, type: :model do
  it { should validate_presence_of(:course) }
  it { should validate_presence_of(:institution) }
  it { should validate_presence_of(:start_date) }
  include_examples "validates locale and contentful_id"

  it 'has a valid factory' do
    expect(build(:education)).to be_valid
  end
end
