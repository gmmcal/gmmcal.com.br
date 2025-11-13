# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ErrorsController, type: :controller do
  describe '404' do
    it 'is a success' do
      get :not_found

      expect(response).to have_http_status(:not_found)
    end
  end

  describe '422' do
    it 'is a success' do
      get :unacceptable

      expect(response).to have_http_status(:unprocessable_content)
    end
  end

  describe '500' do
    it 'is a success' do
      get :internal_error

      expect(response).to have_http_status(:internal_server_error)
    end
  end
end
