# frozen_string_literal: true

RSpec.shared_examples 'listener' do
  it 'calls system cache' do
    expect(described_class).to have_received(:cache).at_least(:once)
  end

  it 'clears the cache' do
    expect(cache).to have_received(:delete).with(cache_key).at_least(:once)
  end
end
