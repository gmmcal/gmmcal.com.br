# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::WorkExperience, vcr: { cassette_name: 'cms/work_experience' } do
  subject(:object) { Cms::Sync.find('work_id') }

  include_examples '.save'

  it 'maps to WorkExperience model' do
    expect(object.model).to eq(::WorkExperience)
  end
end
