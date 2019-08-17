# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationDecorator, type: :decorator do
  let(:education) { create(:education).decorate }

  it 'responds with a json' do
    keys = education.as_json.keys
    expect(keys).to eq(%w[course institution description start_date end_date])
  end

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(EducationsDecorator)
  end
end
