# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Country, type: :library do
  before do
    I18n.locale = :en
  end

  it do
    expect(described_class.all).to eq [%w[Brazil BR], %w[Netherlands NL], %w[Portugal PT]]
  end
end
