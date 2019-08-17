# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AboutDecorator, type: :decorator do
  let(:about) { create(:about, country: 'NL').decorate }

  it 'responds with a json' do
    keys = about.as_json.keys
    expect(keys).to eq(%w[job_title description city phone_number email cv country])
  end
end
