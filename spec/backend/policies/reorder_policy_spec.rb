# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ReorderPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { nil }
  let(:instance) { described_class.new(user, record) }

  it 'allows to update record' do
    expect(instance.update?).to eq(true)
  end
end
