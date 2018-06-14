require 'rails_helper'

RSpec.describe Cms::Sync do
  xit '#all'
  xit '#find'

  it '#client' do
    expect(described_class.client).to be_instance_of(Contentful::Client)
  end
end
