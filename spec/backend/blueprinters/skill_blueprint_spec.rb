# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SkillBlueprint, type: :blueprint do
  let(:skill) { create(:skill).decorate }
  let(:blueprint) { described_class.render_as_hash(skill) }
  let(:expected_keys) { %i[name value] }

  it 'has skill keys' do
    expect(blueprint.keys).to eq(expected_keys)
  end
end
