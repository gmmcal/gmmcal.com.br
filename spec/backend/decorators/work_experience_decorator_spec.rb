# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperienceDecorator, type: :decorator do
  let(:work_experience) { create(:work_experience).decorate }

  it 'responds with a json' do
    keys = work_experience.as_json.keys
    expect(keys).to eq(%w[company_name position city description start_date end_date country])
  end

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(WorkExperiencesDecorator)
  end
end
