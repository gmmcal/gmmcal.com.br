# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PwaController, type: :request do
  describe 'manifest.json' do
    it 'is a success' do
      get '/manifest.json'

      expect(response).to have_http_status(:ok)
    end
  end

  describe 'service-worker.js' do
    it 'is a success' do
      get '/service-worker.js'

      expect(response).to have_http_status(:ok)
    end
  end

  describe 'offline' do
    it 'is a success' do
      get '/offline'

      expect(response).to have_http_status(:ok)
    end
  end
end
