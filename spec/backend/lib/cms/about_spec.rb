# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::About, vcr: { cassette_name: 'cms/about' } do
  subject(:object) { Cms::Sync.find('about_id') }

  include_examples '.save'

  it 'maps to About model' do
    expect(object.model).to eq(::About)
  end
end
