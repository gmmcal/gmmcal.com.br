# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SkillsDecorator, type: :decorator do
  let(:skills) { described_class.decorate(create_list(:skill, 100)) }

  it 'has a collection decorator class' do
    expect(skills.cv.size).to eq(10)
  end
end
