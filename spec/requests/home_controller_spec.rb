# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HomeController, type: :request do
  context do
    before do
      get "/#{locale}"
    end

    shared_examples 'Localization' do
      it 'is a success' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders template in english' do
        expect(I18n.locale).to be(expected_locale)
      end
    end

    context 'without locale' do
      let(:locale) {}
      let(:expected_locale) { :en }

      it_behaves_like 'Localization'
    end

    context 'with locale in en' do
      let(:locale) { :en }
      let(:expected_locale) { :en }

      it_behaves_like 'Localization'
    end

    context 'with locale in pt-BR' do
      let(:locale) { :'pt-BR' }
      let(:expected_locale) { :'pt-BR' }

      it_behaves_like 'Localization'
    end
  end

  describe '/sitemap' do
    before do
      get '/sitemap'
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in xml' do
      expect(response.content_type).to eq 'application/xml'
    end
  end
end
