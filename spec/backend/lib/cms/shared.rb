# frozen_string_literal: true

RSpec.shared_examples '.save' do
  it 'creates an entry' do
    object.save
    expect(object.model.count).not_to be_zero
  end
end
