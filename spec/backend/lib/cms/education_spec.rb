# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::Education, vcr: { cassette_name: 'cms/education' } do
  subject(:object) { Cms::Sync.find('education_id') }

  include_examples '.save'

  it 'maps to Education model' do
    expect(object.model).to eq(::Education)
  end
end
