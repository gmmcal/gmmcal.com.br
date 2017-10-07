require 'rails_helper'

RSpec.describe WorkExperience, type: :model do
  it { should validate_presence_of(:company_name) }
  it { should validate_presence_of(:position) }
  it { should validate_presence_of(:city) }
  it { should validate_presence_of(:country) }
  it { should validate_presence_of(:start_date) }
  it { should validate_presence_of(:end_date) }
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }
end
