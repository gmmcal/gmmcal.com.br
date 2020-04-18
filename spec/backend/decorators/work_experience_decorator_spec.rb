# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperienceDecorator, type: :decorator do
  let(:work_experience) { create(:work_experience).decorate }

  it 'returns CV url' do
    I18n.locale = :en
    expect(work_experience.start_date).to eq('Dec / 2017')
  end

  it 'returns country name' do
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
