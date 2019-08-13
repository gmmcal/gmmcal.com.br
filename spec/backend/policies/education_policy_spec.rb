# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { create(:education) }
  let(:instance) { described_class.new(user, record) }

  it 'has permitted_attributes definitions' do
    expect(instance.permitted_attributes).to eq %i[course institution description start_date end_date locale]
  end
end
