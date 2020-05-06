# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperienceDecorator, type: :decorator do
  let(:work_experience) { create(:work_experience, start_date: '2017-12-01', country: 'US').decorate }

  it 'returns formatted start date' do
    I18n.locale = :en
    expect(work_experience.start_date).to eq('Dec / 2017')
  end

  it 'returns currently as end date' do
    I18n.locale = :en
    expect(work_experience.end_date).to eq('Currently')
  end

  it 'returns country name' do
    I18n.locale = :en
    expect(work_experience.country).to eq('United States')
  end

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(WorkExperiencesDecorator)
  end
end
