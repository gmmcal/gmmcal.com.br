# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PwaController, type: :controller do
  describe 'manifest.json' do
    before do
      get :manifest, format: :json
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in json' do
      expect(response.content_type).to eq 'application/json; charset=utf-8'
    end
  end

  describe 'service-worker.js' do
    before do
      get :worker, format: :js
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in js' do
      expect(response.content_type).to eq 'text/javascript; charset=utf-8'
    end
  end

  describe 'offline' do
    it 'is a success' do
      get :offline

      expect(response).to have_http_status(:ok)
    end
  end
end
