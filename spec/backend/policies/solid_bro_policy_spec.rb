# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SolidBroPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { create(:skill) }
  let(:instance) { described_class.new(user, record) }

  it 'allows to access dashboard' do
    expect(instance.access?).to be(true)
  end
end
