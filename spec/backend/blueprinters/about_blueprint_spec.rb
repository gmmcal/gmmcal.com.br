# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AboutBlueprint, type: :blueprint do
  let(:about) { create(:about).decorate }
  let(:blueprint) { described_class.render_as_hash(about) }
  let(:expected_keys) { %i[job_title description city phone_number email cv country] }

  it 'has about keys' do
    expect(blueprint.keys).to eq(expected_keys)
  end
end
