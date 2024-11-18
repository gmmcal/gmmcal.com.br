# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::ReorderController, type: :controller do
  context 'without authenticated user' do
    describe 'PUT #update' do
      before do
        put :update
      end

      it_behaves_like 'unauthorized'
    end
  end

  context 'with authenticated user' do
    let(:user) { create(:user) }

    before do
      allow(ReorderJob).to receive(:perform_later)
      sign_in(user)
    end

    describe 'PUT #update' do
      before do
        put :update, params: { reorder: { ids: ids, model: model } }
      end

      context 'with about model' do
        let(:model) { :about }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a failure response' do
          expect(response).to be_successful
        end

        it 'triggers reorder event' do
          expect(ReorderJob).to have_received(:perform_later).with(ids: ids, model: "about")
        end
      end

      context 'with education model' do
        let(:model) { :education }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a successful response' do
          expect(response).to be_successful
        end

        it 'triggers reorder event' do
          expect(ReorderJob).to have_received(:perform_later).with(ids: ids, model: "education")
        end
      end

      context 'with skill model' do
        let(:model) { :skill }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a failure response' do
          expect(response).to be_successful
        end

        it 'triggers reorder event' do
          expect(ReorderJob).to have_received(:perform_later).with(ids: ids, model: "skill")
        end
      end

      context 'with work_experience model' do
        let(:model) { :work_experience }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a successful response' do
          expect(response).to be_successful
        end

        it 'triggers reorder event' do
          expect(ReorderJob).to have_received(:perform_later).with(ids: ids, model: "work_experience")
        end
      end

      context 'with user model' do
        let(:model) { :user }
        let(:items) { create_list(model, 5) }
        let(:ids) { items.map(&:id).shuffle }

        it 'returns a failure response' do
          expect(response).to be_successful
        end

        it 'triggers reorder event' do
          expect(ReorderJob).to have_received(:perform_later).with(ids: ids, model: "user")
        end
      end
    end
  end
end
