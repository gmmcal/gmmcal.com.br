# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::AboutController, type: :controller do
  let(:valid_attributes) { attributes_for(:about) }
  let(:invalid_attributes) { attributes_for(:about, :invalid) }

  context 'without authenticated user' do
    describe 'GET #index' do
      before do
        get :index
      end

      it_behaves_like 'unauthorized'
    end

    describe 'GET #edit' do
      let(:about) { create(:about, valid_attributes) }

      before do
        get :edit, params: { id: about.id }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'POST #create' do
      before do
        post :create, params: { about: valid_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'PUT #update' do
      let(:about) { create(:about, valid_attributes) }
      let(:new_title) { 'Some new job title' }
      let(:new_attributes) { attributes_for(:about, job_title: new_title) }

      before do
        put :update, params: { id: about.to_param, about: new_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'DELETE #destroy' do
      let(:about) { create(:about, valid_attributes) }

      before do
        delete :destroy, params: { id: about.id }
      end

      it_behaves_like 'unauthorized'
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      allow(CacheCleanupJob).to receive(:perform_later)
      sign_in(user)
    end

    describe 'GET #index' do
      it 'returns a success response' do
        get :index
        expect(response).to be_successful
      end
    end

    describe 'GET #edit' do
      it 'returns a success response' do
        about = create(:about, valid_attributes)
        get :edit, params: { id: about.id }
        expect(response).to be_successful
      end
    end

    describe 'POST #create' do
      context 'with valid params' do
        it 'creates a new About' do
          expect do
            post :create, params: { about: valid_attributes }, format: :turbo_stream
          end.to change(About, :count).by(1)
        end

        it 'triggers created event' do
          post :create, params: { about: valid_attributes }, format: :turbo_stream
          expect(CacheCleanupJob).to have_received(:perform_later).with(id: About.last.id, model: :about)
        end
      end

      context 'with invalid params' do
        it 'returns a success response (i.e. to display the new template)' do
          post :create, params: { about: invalid_attributes }, format: :turbo_stream
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          post :create, params: { about: invalid_attributes }, format: :turbo_stream
          expect(CacheCleanupJob).not_to have_received(:perform_later)
        end
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_title) { 'Some new job title' }
        let(:new_attributes) { attributes_for(:about, job_title: new_title) }

        it 'updates the requested about' do
          about = create(:about, valid_attributes)
          put :update, params: { id: about.to_param, about: new_attributes }, format: :turbo_stream
          about.reload
          expect(about.job_title).to eq(new_title)
        end

        it 'triggers updated event' do
          about = create(:about, valid_attributes)
          put :update, params: { id: about.to_param, about: new_attributes }, format: :turbo_stream
          expect(CacheCleanupJob).to have_received(:perform_later).with(id: about.id, model: :about)
        end
      end

      context 'with invalid params' do
        let(:new_attributes) { attributes_for(:about, :invalid) }

        it 'returns a success response (i.e. to display the edit template)' do
          about = create(:about, valid_attributes)
          put :update, params: { id: about.to_param, about: new_attributes }, format: :turbo_stream
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          about = create(:about, valid_attributes)
          put :update, params: { id: about.to_param, about: new_attributes }, format: :turbo_stream
          expect(CacheCleanupJob).not_to have_received(:perform_later)
        end
      end
    end

    describe 'DELETE #destroy' do
      it 'destroys the requested about' do
        about = create(:about, valid_attributes)
        expect do
          delete :destroy, params: { id: about.id }, format: :turbo_stream
        end.to change(About, :count).by(-1)
      end

      it 'triggers destroyed event' do
        about = create(:about, valid_attributes)
        delete :destroy, params: { id: about.id }, format: :turbo_stream
        expect(CacheCleanupJob).to have_received(:perform_later).with(id: about.id, model: :about)
      end
    end
  end
end
