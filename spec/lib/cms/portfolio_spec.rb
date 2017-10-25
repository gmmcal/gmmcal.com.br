require 'rails_helper'

RSpec.describe Cms::Portfolio do
  let (:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'portfolio.json'))) }

  include_examples ".save"

  it 'should map to Portfolio model' do
    expect(subject.model).to eq(::Portfolio)
  end
end