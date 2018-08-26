# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::Skill do
  subject(:skill) { described_class.new(data, {}, true) }

  let(:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'skill.json'))) }

  let(:data) { file_content.to_h.with_indifferent_access }

  include_examples '.save' do
    let(:object) { skill }
  end

  it 'maps to Skill model' do
    expect(skill.model).to eq(::Skill)
  end
end
