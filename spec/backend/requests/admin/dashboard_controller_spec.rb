# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::DashboardController, type: :request do
  context 'without authenticated user' do
    describe 'GET #index' do
      before do
        get '/admin'
      end

      it_behaves_like 'unauthorized'
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      sign_in(user)
    end

    describe 'GET #index' do
      it 'returns a success response' do
        get '/admin'
        expect(response).to be_successful
      end
    end
  end
end
