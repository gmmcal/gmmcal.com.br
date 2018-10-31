# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::WorkExperiencesController, type: :request do
  let(:valid_attributes) { attributes_for(:work_experience) }
  let(:invalid_attributes) { attributes_for(:work_experience, :invalid) }
  let(:valid_session) { {} }

  describe 'GET #index' do
    it 'returns a success response' do
      create(:work_experience, valid_attributes)
      get '/admin/work_experiences'
      expect(response).to be_successful
    end
  end

  describe 'GET #new' do
    it 'returns a success response' do
      get '/admin/work_experiences/new'
      expect(response).to be_successful
    end
  end

  describe 'GET #edit' do
    it 'returns a success response' do
      work_experience = create(:work_experience, valid_attributes)
      get "/admin/work_experiences/#{work_experience.id}/edit"
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new work_experience' do
        expect do
          post '/admin/work_experiences', params: { work_experience: valid_attributes }
        end.to change(WorkExperience, :count).by(1)
      end

      it 'redirects to the created work_experience' do
        post '/admin/work_experiences', params: { work_experience: valid_attributes }
        expect(response).to redirect_to([:admin, WorkExperience.last])
      end
    end

    context 'with invalid params' do
      it 'returns a success response (i.e. to display the new template)' do
        post '/admin/work_experiences', params: { work_experience: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'PUT #update' do
    context 'with valid params' do
      let(:new_company_name) { 'Awesome work_experience' }
      let(:new_attributes) { attributes_for(:work_experience, company_name: new_company_name) }

      it 'updates the requested work_experience' do
        work_experience = create(:work_experience, valid_attributes)
        put "/admin/work_experiences/#{work_experience.id}", params: { id: work_experience.to_param, work_experience: new_attributes }
        work_experience.reload
        expect(work_experience.company_name).to eq(new_company_name)
      end

      it 'redirects to the work_experience' do
        work_experience = create(:work_experience, valid_attributes)
        put "/admin/work_experiences/#{work_experience.id}", params: { id: work_experience.to_param, work_experience: new_attributes }
        expect(response).to redirect_to([:admin, work_experience])
      end
    end

    context 'with invalid params' do
      let(:new_attributes) { attributes_for(:work_experience, :invalid) }

      it 'returns a success response (i.e. to display the edit template)' do
        work_experience = create(:work_experience, valid_attributes)
        put "/admin/work_experiences/#{work_experience.id}", params: { id: work_experience.to_param, work_experience: new_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested work_experience' do
      work_experience = create(:work_experience, valid_attributes)
      expect do
        delete "/admin/work_experiences/#{work_experience.id}"
      end.to change(WorkExperience, :count).by(-1)
    end

    it 'redirects to the work_experiences list' do
      work_experience = create(:work_experience, valid_attributes)
      delete "/admin/work_experiences/#{work_experience.id}"
      expect(response).to redirect_to(%i[admin work_experiences])
    end
  end
end
