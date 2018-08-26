# frozen_string_literal: true

RSpec.shared_examples '.save' do
  before do
    allow(object).to receive(:url_for_field).and_return('file.ext')
  end

  it 'creates an entry' do
    object.save
    expect(object.model.count).not_to be_zero
  end
end
