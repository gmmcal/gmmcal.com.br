RSpec.shared_examples "validates locale and contentful_id" do
  it { should validate_presence_of(:locale) }
  it { should validate_presence_of(:contentful_id) }
end