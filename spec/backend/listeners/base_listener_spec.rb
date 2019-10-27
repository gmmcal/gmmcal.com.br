# frozen_string_literal: true

require 'rails_helper'

RSpec.describe BaseListener, type: :listener do
  it 'raises error if event is not defined' do
    expect { described_class.new.send(:an_event) }.to raise_error(NoMethodError)
  end
end
