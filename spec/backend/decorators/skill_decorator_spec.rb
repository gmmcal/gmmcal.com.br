# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SkillDecorator, type: :decorator do
  let(:skill) { create(:skill).decorate }

  it 'has a collection decorator class' do
    expect(described_class.collection_decorator_class).to eq(SkillsDecorator)
  end
end
