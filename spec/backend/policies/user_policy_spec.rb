# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UserPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { create(:user) }
  let(:instance) { described_class.new(user, record) }

  it 'has permitted_attributes definitions' do
    expect(instance.permitted_attributes).to eq %i[first_name last_name email password password_confirmation default_locale]
  end
end
