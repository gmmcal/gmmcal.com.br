require 'rails_helper'

RSpec.describe Cms::Education do
  let (:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'education.json'))) }

  include_examples ".save"

  it 'should map to Education model' do
    expect(subject.model).to eq(::Education)
  end
end