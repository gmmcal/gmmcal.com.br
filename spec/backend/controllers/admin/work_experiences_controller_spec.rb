# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::WorkExperiencesController, type: :controller do
  let(:valid_attributes) { attributes_for(:work_experience) }
  let(:invalid_attributes) { attributes_for(:work_experience, :invalid) }

  context 'without authenticated user' do
    describe 'GET #index' do
      before do
        get :index
      end

      it_behaves_like 'unauthorized'
    end

    describe 'GET #new' do
      before do
        get :new
      end

      it_behaves_like 'unauthorized'
    end

    describe 'GET #edit' do
      let(:work_experience) { create(:work_experience, valid_attributes) }

      before do
        get :edit, params: { id: work_experience.id }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'POST #create' do
      before do
        post :create, params: { work_experience: valid_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'PUT #update' do
      let(:work_experience) { create(:work_experience, valid_attributes) }
      let(:new_company_name) { 'Awesome work_experience' }
      let(:new_attributes) { attributes_for(:work_experience, company_name: new_company_name) }

      before do
        put :update, params: { id: work_experience.to_param, work_experience: new_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'DELETE #destroy' do
      let(:work_experience) { create(:work_experience, valid_attributes) }

      before do
        delete :destroy, params: { id: work_experience.id }
      end

      it_behaves_like 'unauthorized'
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      allow(controller).to receive(:publish)
      sign_in(user)
    end

    describe 'GET #index' do
      it 'returns a success response' do
        get :index
        expect(response).to be_successful
      end
    end

    describe 'GET #new' do
      it 'returns a success response' do
        get :new
        expect(response).to be_successful
      end
    end

    describe 'GET #edit' do
      it 'returns a success response' do
        work_experience = create(:work_experience, valid_attributes)
        get :edit, params: { id: work_experience.id }
        expect(response).to be_successful
      end
    end

    describe 'POST #create' do
      context 'with valid params' do
        it 'creates a new work_experience' do
          expect do
            post :create, params: { work_experience: valid_attributes }
          end.to change(WorkExperience, :count).by(1)
        end

        it 'redirects to the created work_experience' do
          post :create, params: { work_experience: valid_attributes }
          expect(response).to redirect_to(admin_work_experiences_path(locale: :en))
        end

        it 'triggers created event' do
          post :create, params: { work_experience: valid_attributes }
          expect(controller).to have_received(:publish).with(:experience_created, experience: WorkExperience.last)
        end
      end

      context 'with invalid params' do
        it 'returns a success response (i.e. to display the new template)' do
          post :create, params: { work_experience: invalid_attributes }
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          post :create, params: { work_experience: invalid_attributes }
          expect(controller).not_to have_received(:publish)
        end
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_company_name) { 'Awesome work_experience' }
        let(:new_attributes) { attributes_for(:work_experience, company_name: new_company_name) }

        it 'updates the requested work_experience' do
          work_experience = create(:work_experience, valid_attributes)
          put :update, params: { id: work_experience.to_param, work_experience: new_attributes }
          work_experience.reload
          expect(work_experience.company_name).to eq(new_company_name)
        end

        it 'redirects to the work_experience' do
          work_experience = create(:work_experience, valid_attributes)
          put :update, params: { id: work_experience.to_param, work_experience: new_attributes }
          expect(response).to redirect_to(admin_work_experiences_path(locale: :en))
        end

        it 'triggers updated event' do
          work_experience = create(:work_experience, valid_attributes)
          put :update, params: { id: work_experience.to_param, work_experience: new_attributes }
          expect(controller).to have_received(:publish).with(:experience_updated, experience: work_experience)
        end
      end

      context 'with invalid params' do
        let(:new_attributes) { attributes_for(:work_experience, :invalid) }

        it 'returns a success response (i.e. to display the edit template)' do
          work_experience = create(:work_experience, valid_attributes)
          put :update, params: { id: work_experience.to_param, work_experience: new_attributes }
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          work_experience = create(:work_experience, valid_attributes)
          put :update, params: { id: work_experience.to_param, work_experience: new_attributes }
          expect(controller).not_to have_received(:publish)
        end
      end
    end

    describe 'DELETE #destroy' do
      it 'destroys the requested work_experience' do
        work_experience = create(:work_experience, valid_attributes)
        expect do
          delete :destroy, params: { id: work_experience.id }
        end.to change(WorkExperience, :count).by(-1)
      end

      it 'redirects to the work_experiences list' do
        work_experience = create(:work_experience, valid_attributes)
        delete :destroy, params: { id: work_experience.id }
        expect(response).to redirect_to(admin_work_experiences_path(locale: :en))
      end

      it 'triggers destroyed event' do
        work_experience = create(:work_experience, valid_attributes)
        delete :destroy, params: { id: work_experience.id }
        expect(controller).to have_received(:publish).with(:experience_destroyed, experience: work_experience)
      end
    end
  end
end
