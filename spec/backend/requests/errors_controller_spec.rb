# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ErrorsController, type: :request do
  describe '404' do
    it 'is a success' do
      get '/404'

      expect(response).to have_http_status(:not_found)
    end
  end

  describe '422' do
    it 'is a success' do
      get '/422'

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe '500' do
    it 'is a success' do
      get '/500'

      expect(response).to have_http_status(:internal_server_error)
    end
  end
end
