# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationsDecorator, type: :decorator do
  let(:educations) { described_class.decorate(create_list(:education, 10)) }

  it 'has a collection decorator class' do
    expect(educations.cv.size).to eq(2)
  end
end
