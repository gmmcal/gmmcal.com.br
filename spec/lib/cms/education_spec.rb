# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::Education do
  subject(:education) { described_class.new(data, {}, true) }

  let(:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'education.json'))) }

  let(:data) { file_content.to_h.with_indifferent_access }

  include_examples '.save' do
    let(:object) { education }
  end

  it 'maps to Education model' do
    expect(education.model).to eq(::Education)
  end
end
