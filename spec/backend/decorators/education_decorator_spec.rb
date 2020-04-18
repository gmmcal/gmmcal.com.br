# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationDecorator, type: :decorator do
  let(:education) { create(:education, start_date: '2017-12-01').decorate }

  it 'returns formatted start date' do
    I18n.locale = :en
    expect(education.start_date).to eq('Dec / 2017')
  end

  it 'returns currently as end date' do
    I18n.locale = :en
    expect(education.end_date).to eq('Currently')
  end

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(EducationsDecorator)
  end
end
