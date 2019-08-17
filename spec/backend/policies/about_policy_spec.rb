# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AboutPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { create(:about) }
  let(:instance) { described_class.new(user, record) }

  it 'has permitted_attributes definitions' do
    expect(instance.permitted_attributes).to eq %i[job_title description city country phone_number email locale]
  end
end
