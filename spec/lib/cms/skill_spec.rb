require 'rails_helper'

RSpec.describe Cms::Skill do
  let (:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'skill.json'))) }

  include_examples ".save"

  it 'should map to Skill model' do
    expect(subject.model).to eq(::Skill)
  end
end