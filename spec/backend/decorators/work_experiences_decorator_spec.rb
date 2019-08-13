# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperiencesDecorator, type: :decorator do
  let(:experiences) { described_class.decorate(create_list(:work_experience, 10)) }

  it 'has a collection decorator class' do
    expect(experiences.cv.size).to eq(3)
  end
end
