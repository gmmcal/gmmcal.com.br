require 'rails_helper'

RSpec.describe About, type: :model do
  it { should validate_presence_of(:job_title) }
  it { should validate_presence_of(:cv) }
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }
end
