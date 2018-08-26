# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::About do
  subject(:about) { described_class.new(data, {}, true) }

  let(:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'about.json'))) }

  let(:data) { file_content.to_h.with_indifferent_access }

  include_examples '.save' do
    let(:object) { about }
  end

  it 'maps to About model' do
    expect(about.model).to eq(::About)
  end
end
