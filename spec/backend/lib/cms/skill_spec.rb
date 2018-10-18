# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::Skill, vcr: { cassette_name: 'cms/skill' } do
  subject(:object) { Cms::Sync.find('skill_id') }

  include_examples '.save'

  it 'maps to Skill model' do
    expect(object.model).to eq(::Skill)
  end
end
