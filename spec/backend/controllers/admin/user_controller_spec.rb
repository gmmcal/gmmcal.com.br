# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::UserController, type: :controller do
  let(:valid_attributes) { attributes_for(:user) }
  let(:invalid_attributes) { attributes_for(:user, :invalid) }

  context 'without authenticated user' do
    describe 'GET #edit' do
      let(:user) { create(:user, valid_attributes) }

      before do
        get :edit
      end

      it_behaves_like 'unauthorized'
    end

    describe 'PUT #update' do
      let(:user) { create(:user, valid_attributes) }
      let(:new_name) { 'Awesome user' }
      let(:new_attributes) { attributes_for(:user, first_name: new_name) }

      before do
        put :update, params: { id: user.to_param, user: new_attributes }
      end

      it_behaves_like 'unauthorized'
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      sign_in(user)
    end

    describe 'GET #edit' do
      it 'returns a success response' do
        get :edit
        expect(response).to be_successful
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_name) { 'User' }
        let(:new_attributes) { attributes_for(:user, first_name: new_name) }

        it 'updates the requested user' do
          put :update, params: { id: user.to_param, user: new_attributes }
          user.reload
          expect(user.first_name).to eq(new_name)
        end

        it 'redirects to the user' do
          put :update, params: { id: user.to_param, user: new_attributes }
          expect(response).to redirect_to(%i[edit admin user])
        end
      end

      context 'with invalid params' do
        let(:new_attributes) { attributes_for(:user, :invalid) }

        it 'returns a success response (i.e. to display the edit template)' do
          put :update, params: { id: user.to_param, user: new_attributes }
          expect(response).to be_successful
        end
      end
    end
  end
end
