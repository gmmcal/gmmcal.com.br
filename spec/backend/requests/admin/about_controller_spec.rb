# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::AboutController, type: :request do
  let(:valid_attributes) { attributes_for(:about) }
  let(:invalid_attributes) { attributes_for(:about, :invalid) }
  let(:valid_session) { {} }

  describe 'GET #index' do
    it 'returns a success response' do
      create(:about, valid_attributes)
      get '/admin/abouts'
      expect(response).to be_successful
    end
  end

  describe 'GET #new' do
    it 'returns a success response' do
      get '/admin/abouts/new'
      expect(response).to be_successful
    end
  end

  describe 'GET #edit' do
    it 'returns a success response' do
      about = create(:about, valid_attributes)
      get "/admin/abouts/#{about.id}/edit"
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new About' do
        expect do
          post '/admin/abouts', params: { about: valid_attributes }
        end.to change(About, :count).by(1)
      end

      it 'redirects to the created about' do
        post '/admin/abouts', params: { about: valid_attributes }
        expect(response).to redirect_to(%i[admin abouts])
      end
    end

    context 'with invalid params' do
      it 'returns a success response (i.e. to display the new template)' do
        post '/admin/abouts', params: { about: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'PUT #update' do
    context 'with valid params' do
      let(:new_title) { 'Some new job title' }
      let(:new_attributes) { attributes_for(:about, job_title: new_title) }

      it 'updates the requested about' do
        about = create(:about, valid_attributes)
        put "/admin/abouts/#{about.id}", params: { id: about.to_param, about: new_attributes }
        about.reload
        expect(about.job_title).to eq(new_title)
      end

      it 'redirects to the about' do
        about = create(:about, valid_attributes)
        put "/admin/abouts/#{about.id}", params: { id: about.to_param, about: new_attributes }
        expect(response).to redirect_to(%i[admin abouts])
      end
    end

    context 'with invalid params' do
      let(:new_attributes) { attributes_for(:about, :invalid) }

      it 'returns a success response (i.e. to display the edit template)' do
        about = create(:about, valid_attributes)
        put "/admin/abouts/#{about.id}", params: { id: about.to_param, about: new_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested about' do
      about = create(:about, valid_attributes)
      expect do
        delete "/admin/abouts/#{about.id}"
      end.to change(About, :count).by(-1)
    end

    it 'redirects to the abouts list' do
      about = create(:about, valid_attributes)
      delete "/admin/abouts/#{about.id}"
      expect(response).to redirect_to(%i[admin abouts])
    end
  end
end
