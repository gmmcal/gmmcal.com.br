# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperienceBlueprint, type: :blueprint do
  let(:work_experience) { create(:work_experience).decorate }
  let(:blueprint) { described_class.render_as_hash(work_experience) }
  let(:expected_keys) { %i[company_name position city description start_date end_date country] }

  it 'has work_experience keys' do
    expect(blueprint.keys).to eq(expected_keys)
  end
end
