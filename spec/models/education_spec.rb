require 'rails_helper'

RSpec.describe Education, type: :model do
  it { should validate_presence_of(:course) }
  it { should validate_presence_of(:location) }
  it { should validate_presence_of(:start_date) }
  it { should validate_presence_of(:end_date) }
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }
end
