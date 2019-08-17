# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SkillDecorator, type: :decorator do
  let(:skill) { create(:skill).decorate }

  it 'responds with a json' do
    keys = skill.as_json.keys
    expect(keys).to eq(%w[name value])
  end

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(SkillsDecorator)
  end
end
