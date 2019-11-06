# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  before do
    create(:about)
    create_list(:work_experience, 5)
    create_list(:skill, 30)
    create_list(:education, 3, :finished)
  end

  describe '/' do
    shared_examples 'Localization' do
      it 'is a success' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders template in english' do
        expect(I18n.locale).to be(expected_locale)
      end
    end

    context 'without locale' do
      before do
        get :index
      end

      let(:expected_locale) { :en }

      it_behaves_like 'Localization'
    end

    context 'with locale in en' do
      before do
        get :index, params: { locale: :en }
      end

      let(:expected_locale) { :en }

      it_behaves_like 'Localization'
    end

    context 'with locale in pt-BR' do
      before do
        get :index, params: { locale: :'pt-BR' }
      end
      let(:expected_locale) { :'pt-BR' }

      it_behaves_like 'Localization'
    end
  end

  describe '/sitemap' do
    before do
      get :index, format: :xml
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in xml' do
      expect(response.content_type).to eq 'application/xml; charset=utf-8'
    end
  end
end
