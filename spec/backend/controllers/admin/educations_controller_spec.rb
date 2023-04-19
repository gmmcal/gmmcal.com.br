# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::EducationsController, type: :controller do
  let(:valid_attributes) { attributes_for(:education) }
  let(:invalid_attributes) { attributes_for(:education, :invalid) }

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
      let(:education) { create(:education, valid_attributes) }

      before do
        get :edit, params: { id: education.id }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'POST #create' do
      before do
        post :create, params: { education: valid_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'PUT #update' do
      let(:education) { create(:education, valid_attributes) }
      let(:new_course) { 'Some new course' }
      let(:new_attributes) { attributes_for(:education, course: new_course) }

      before do
        put :update, params: { id: education.to_param, education: new_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'DELETE #destroy' do
      let(:education) { create(:education, valid_attributes) }

      before do
        delete :destroy, params: { id: education.id }
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
        education = create(:education, valid_attributes)
        get :edit, params: { id: education.id }
        expect(response).to be_successful
      end
    end

    describe 'POST #create' do
      context 'with valid params' do
        it 'creates a new education' do
          expect do
            post :create, params: { education: valid_attributes }, format: :turbo_stream
          end.to change(Education, :count).by(1)
        end

        it 'triggers created event' do
          post :create, params: { education: valid_attributes }, format: :turbo_stream
          expect(controller).to have_received(:publish).with(:education_created, education: Education.last)
        end
      end

      context 'with invalid params' do
        it 'returns a success response (i.e. to display the new template)' do
          post :create, params: { education: invalid_attributes }, format: :turbo_stream
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          post :create, params: { education: invalid_attributes }, format: :turbo_stream
          expect(controller).not_to have_received(:publish)
        end
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_course) { 'Some new course' }
        let(:new_attributes) { attributes_for(:education, course: new_course) }

        it 'updates the requested education' do
          education = create(:education, valid_attributes)
          put :update, params: { id: education.to_param, education: new_attributes }, format: :turbo_stream
          education.reload
          expect(education.course).to eq(new_course)
        end

        it 'triggers updated event' do
          education = create(:education, valid_attributes)
          put :update, params: { id: education.to_param, education: new_attributes }, format: :turbo_stream
          expect(controller).to have_received(:publish).with(:education_updated, education: education)
        end
      end

      context 'with invalid params' do
        let(:new_attributes) { attributes_for(:education, :invalid) }

        it 'returns a success response (i.e. to display the edit template)' do
          education = create(:education, valid_attributes)
          put :update, params: { id: education.to_param, education: new_attributes }, format: :turbo_stream
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          education = create(:education, valid_attributes)
          put :update, params: { id: education.to_param, education: new_attributes }, format: :turbo_stream
          expect(controller).not_to have_received(:publish)
        end
      end
    end

    describe 'DELETE #destroy' do
      it 'destroys the requested education' do
        education = create(:education, valid_attributes)
        expect do
          delete :destroy, params: { id: education.id }, format: :turbo_stream
        end.to change(Education, :count).by(-1)
      end

      it 'triggers destroyed event' do
        education = create(:education, valid_attributes)
        delete :destroy, params: { id: education.id }, format: :turbo_stream
        expect(controller).to have_received(:publish).with(:education_destroyed, education: education)
      end
    end
  end
end
