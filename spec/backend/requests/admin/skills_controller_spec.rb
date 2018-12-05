# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::SkillsController, type: :request do
  let(:valid_attributes) { attributes_for(:skill) }
  let(:invalid_attributes) { attributes_for(:skill, :invalid) }

  context 'without authenticated user' do
    describe 'GET #index' do
      before do
        get '/admin/skills'
      end

      it_behaves_like 'unauthorized'
    end

    describe 'GET #new' do
      before do
        get '/admin/skills/new'
      end

      it_behaves_like 'unauthorized'
    end

    describe 'GET #edit' do
      let(:skill) { create(:skill, valid_attributes) }

      before do
        get "/admin/skills/#{skill.id}/edit"
      end

      it_behaves_like 'unauthorized'
    end

    describe 'POST #create' do
      before do
        post '/admin/skills', params: { skill: valid_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'PUT #update' do
      let(:skill) { create(:skill, valid_attributes) }
      let(:new_name) { 'Awesome skill' }
      let(:new_attributes) { attributes_for(:skill, name: new_name) }

      before do
        put "/admin/skills/#{skill.id}", params: { id: skill.to_param, skill: new_attributes }
      end

      it_behaves_like 'unauthorized'
    end

    describe 'DELETE #destroy' do
      let(:skill) { create(:skill, valid_attributes) }

      before do
        delete "/admin/skills/#{skill.id}"
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
        get '/admin/skills'
        expect(response).to be_successful
      end
    end

    describe 'GET #new' do
      it 'returns a success response' do
        get '/admin/skills/new'
        expect(response).to be_successful
      end
    end

    describe 'GET #edit' do
      it 'returns a success response' do
        skill = create(:skill, valid_attributes)
        get "/admin/skills/#{skill.id}/edit"
        expect(response).to be_successful
      end
    end

    describe 'POST #create' do
      context 'with valid params' do
        it 'creates a new skill' do
          expect do
            post '/admin/skills', params: { skill: valid_attributes }
          end.to change(Skill, :count).by(1)
        end

        it 'redirects to the created skill' do
          post '/admin/skills', params: { skill: valid_attributes }
          expect(response).to redirect_to(admin_skills_path(locale: :en))
        end
      end

      context 'with invalid params' do
        it 'returns a success response (i.e. to display the new template)' do
          post '/admin/skills', params: { skill: invalid_attributes }
          expect(response).to be_successful
        end
      end
    end

    describe 'PUT #update' do
      context 'with valid params' do
        let(:new_name) { 'Awesome skill' }
        let(:new_attributes) { attributes_for(:skill, name: new_name) }

        it 'updates the requested skill' do
          skill = create(:skill, valid_attributes)
          put "/admin/skills/#{skill.id}", params: { id: skill.to_param, skill: new_attributes }
          skill.reload
          expect(skill.name).to eq(new_name)
        end

        it 'redirects to the skill' do
          skill = create(:skill, valid_attributes)
          put "/admin/skills/#{skill.id}", params: { id: skill.to_param, skill: new_attributes }
          expect(response).to redirect_to(admin_skills_path(locale: :en))
        end
      end

      context 'with invalid params' do
        let(:new_attributes) { attributes_for(:skill, :invalid) }

        it 'returns a success response (i.e. to display the edit template)' do
          skill = create(:skill, valid_attributes)
          put "/admin/skills/#{skill.id}", params: { id: skill.to_param, skill: new_attributes }
          expect(response).to be_successful
        end
      end
    end

    describe 'DELETE #destroy' do
      it 'destroys the requested skill' do
        skill = create(:skill, valid_attributes)
        expect do
          delete "/admin/skills/#{skill.id}"
        end.to change(Skill, :count).by(-1)
      end

      it 'redirects to the skills list' do
        skill = create(:skill, valid_attributes)
        delete "/admin/skills/#{skill.id}"
        expect(response).to redirect_to(admin_skills_path(locale: :en))
      end
    end
  end
end
