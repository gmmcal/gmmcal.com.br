require 'rails_helper'

RSpec.describe Cms::WorkExperience do
  let (:file_content) { JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'work_experience.json'))) }

  include_examples ".save"

  it 'should map to WorkExperience model' do
    expect(subject.model).to eq(::WorkExperience)
  end
end