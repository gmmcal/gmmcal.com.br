require 'rails_helper'

RSpec.describe About, type: :model do
  it { should validate_presence_of(:job_title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:cv) }
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }

  it 'has a valid factory' do
    expect(build(:about)).to be_valid
  end
end
