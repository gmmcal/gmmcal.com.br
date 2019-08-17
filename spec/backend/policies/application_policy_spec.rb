# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ApplicationPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { nil }
  let(:instance) { described_class.new(user, record) }

  it 'allows to index record' do
    expect(instance.index?).to eq(true)
  end

  it 'allows to new record' do
    expect(instance.new?).to eq(true)
  end

  it 'allows to create record' do
    expect(instance.create?).to eq(true)
  end

  it 'allows to edit record' do
    expect(instance.edit?).to eq(true)
  end

  it 'allows to update record' do
    expect(instance.update?).to eq(true)
  end

  it 'allows to destroy record' do
    expect(instance.destroy?).to eq(true)
  end
end
