require 'rails_helper'

RSpec.describe Skill, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:hero) }
  it { should validate_presence_of(:value) }
  it { should validate_numericality_of(:value).is_greater_than_or_equal_to(0) }
  it { should validate_numericality_of(:value).is_less_than_or_equal_to(100) }
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }
end
