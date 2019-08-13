# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WorkExperiencePolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { create(:work_experience) }
  let(:instance) { described_class.new(user, record) }

  it 'has permitted_attributes definitions' do
    expect(instance.permitted_attributes).to eq %i[company_name position city country start_date end_date description locale]
  end
end
