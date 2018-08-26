# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::WorkExperience do
  subject(:work_experience) { described_class.new(data, {}, true) }

  let(:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'work_experience.json'))) }

  let(:data) { file_content.to_h.with_indifferent_access }

  include_examples '.save' do
    let(:object) { work_experience }
  end

  it 'maps to WorkExperience model' do
    expect(work_experience.model).to eq(::WorkExperience)
  end
end
