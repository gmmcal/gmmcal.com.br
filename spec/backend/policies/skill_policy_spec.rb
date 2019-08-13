# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SkillPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:record) { create(:skill) }
  let(:instance) { described_class.new(user, record) }

  it 'has permitted_attributes definitions' do
    expect(instance.permitted_attributes).to eq %i[name value locale]
  end
end
