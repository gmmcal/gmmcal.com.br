require 'rails_helper'

RSpec.describe Cms::About do
  let(:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'about.json'))) }

  include_examples ".save"

  it 'should map to About model' do
    expect(subject.model).to eq(::About)
  end

end