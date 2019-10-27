# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::ReorderController, type: :request do
  context 'without authenticated user' do
    describe 'PUT #update' do
      before do
        put '/admin/reorder'
      end

      it_behaves_like 'unauthorized'
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      sign_in(user)
    end

    describe 'PUT #update' do
      before do
        put '/admin/reorder', params: { reorder: { ids: ids, model: model } }
      end

      context 'with about model' do
        let(:model) { :about }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a failure response' do
          expect(response).to be_successful
        end
      end

      context 'with education model' do
        let(:model) { :education }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a successful response' do
          expect(response).to be_successful
        end

        it 'reorders items' do
          ordered_ids = Education.ordered.pluck(:id)

          expect(ordered_ids).to eq(ids)
        end
      end

      context 'with skill model' do
        let(:model) { :skill }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a failure response' do
          expect(response).to be_successful
        end
      end

      context 'with work_experience model' do
        let(:model) { :work_experience }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a successful response' do
          expect(response).to be_successful
        end

        it 'reorders items' do
          ordered_ids = WorkExperience.ordered.pluck(:id)

          expect(ordered_ids).to eq(ids)
        end
      end

      context 'with user model' do
        let(:model) { :user }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a failure response' do
          expect(response).to be_successful
        end
      end
    end
  end
end
