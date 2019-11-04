# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationBlueprint, type: :blueprint do
  let(:education) { create(:education).decorate }
  let(:blueprint) { described_class.render_as_hash(education) }
  let(:expected_keys) { %i[course institution description start_date end_date] }

  it 'has education keys' do
    expect(blueprint.keys).to eq(expected_keys)
  end
end
