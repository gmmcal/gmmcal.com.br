# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::DashboardController, type: :request do
  describe 'GET #index' do
    it 'returns a success response' do
      get '/admin'
      expect(response).to be_successful
    end
  end
end
