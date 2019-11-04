# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::SkillsController, type: :controller do
  let(:valid_attributes) { attributes_for(:skill) }
  let(:invalid_attributes) { attributes_for(:skill, :invalid) }

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
      let(:skill) { create(:skill, valid_attributes) }

      before do
        get :edit, params: { id: skill.id }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'POST #create' do
      before do
        post :create, params: { skill: valid_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'PUT #update' do
      let(:skill) { create(:skill, valid_attributes) }
      let(:new_name) { 'Awesome skill' }
      let(:new_attributes) { attributes_for(:skill, name: new_name) }

      before do
        put :update, params: { id: skill.to_param, skill: new_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'DELETE #destroy' do
      let(:skill) { create(:skill, valid_attributes) }

      before do
        delete :destroy, params: { id: skill.id }
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
        skill = create(:skill, valid_attributes)
        get :edit, params: { id: skill.id }
        expect(response).to be_successful
      end
    end

    describe 'POST #create' do
      context 'with valid params' do
        it 'creates a new skill' do
          expect do
            post :create, params: { skill: valid_attributes }
          end.to change(Skill, :count).by(1)
        end

        it 'redirects to the created skill' do
          post :create, params: { skill: valid_attributes }
          expect(response).to redirect_to(admin_skills_path(locale: :en))
        end

        it 'triggers created event' do
          post :create, params: { skill: valid_attributes }
          expect(controller).to have_received(:publish).with(:skill_created, skill: Skill.last)
        end
      end

      context 'with invalid params' do
        it 'returns a success response (i.e. to display the new template)' do
          post :create, params: { skill: invalid_attributes }
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          post :create, params: { skill: invalid_attributes }
          expect(controller).not_to have_received(:publish)
        end
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_name) { 'Awesome skill' }
        let(:new_attributes) { attributes_for(:skill, name: new_name) }

        it 'updates the requested skill' do
          skill = create(:skill, valid_attributes)
          put :update, params: { id: skill.to_param, skill: new_attributes }
          skill.reload
          expect(skill.name).to eq(new_name)
        end

        it 'redirects to the skill' do
          skill = create(:skill, valid_attributes)
          put :update, params: { id: skill.to_param, skill: new_attributes }
          expect(response).to redirect_to(admin_skills_path(locale: :en))
        end

        it 'triggers updated event' do
          skill = create(:skill, valid_attributes)
          put :update, params: { id: skill.to_param, skill: new_attributes }
          expect(controller).to have_received(:publish).with(:skill_updated, skill: skill)
        end
      end

      context 'with invalid params' do
        let(:new_attributes) { attributes_for(:skill, :invalid) }

        it 'returns a success response (i.e. to display the edit template)' do
          skill = create(:skill, valid_attributes)
          put :update, params: { id: skill.to_param, skill: new_attributes }
          expect(response).to be_successful
        end

        it 'does not triggers any event' do
          skill = create(:skill, valid_attributes)
          put :update, params: { id: skill.to_param, skill: new_attributes }
          expect(controller).not_to have_received(:publish)
        end
      end
    end

    describe 'DELETE #destroy' do
      it 'destroys the requested skill' do
        skill = create(:skill, valid_attributes)
        expect do
          delete :destroy, params: { id: skill.id }
        end.to change(Skill, :count).by(-1)
      end

      it 'redirects to the skills list' do
        skill = create(:skill, valid_attributes)
        delete :destroy, params: { id: skill.id }
        expect(response).to redirect_to(admin_skills_path(locale: :en))
      end

      it 'triggers destroyed event' do
        skill = create(:skill, valid_attributes)
        delete :destroy, params: { id: skill.id }
        expect(controller).to have_received(:publish).with(:skill_destroyed, skill: skill)
      end
    end
  end
end
