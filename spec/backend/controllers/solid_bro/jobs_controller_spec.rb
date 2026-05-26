# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SolidBro::JobsController, type: :controller do
  routes { SolidBro::Engine.routes }

  context 'without authenticated user' do
    describe 'GET #index' do
      before do
        get :index
      end

      it 'request is rejected' do
        expect(response).not_to be_successful
      end
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      sign_in(user)
    end

    describe 'GET #index' do
      it 'returns a success response' do
        get :index
        expect(response).to be_successful
      end
    end
  end
end
