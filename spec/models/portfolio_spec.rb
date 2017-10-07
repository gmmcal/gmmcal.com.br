require 'rails_helper'

RSpec.describe Portfolio, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:thumbnail) }
  it { should validate_presence_of(:image) }
  it { should validate_presence_of(:categories) }
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }
end
