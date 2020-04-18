# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationDecorator, type: :decorator do
  let(:education) { create(:education).decorate }

  it 'returns CV url' do
    I18n.locale = :en
    expect(education.start_date).to eq('Dec / 2017')
  end

  it 'returns country name' do
    I18n.locale = :en
    expect(education.end_date).to eq('Currently')
  end

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(EducationsDecorator)
  end
end
