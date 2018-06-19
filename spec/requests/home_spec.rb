require 'rails_helper'

RSpec.describe HomeController, type: :request do
  context do
    before(:each) do
      get "/#{locale}"
    end

    shared_context 'Localization' do
      it 'should be a success' do
        expect(response).to have_http_status(:ok)
      end

      it 'should render template in english' do
        expect(I18n.locale).to be(expected_locale)
      end
    end

    context 'Without locale' do
      let(:locale) { }
      let(:expected_locale) { :en }

      it_behaves_like 'Localization'
    end

    context 'With locale in en' do
      let(:locale) { :en }
      let(:expected_locale) { :en }

      it_behaves_like 'Localization'
    end

    context 'With locale in pt-BR' do
      let(:locale) { :'pt-BR' }
      let(:expected_locale) { :'pt-BR' }

      it_behaves_like 'Localization'
    end
  end

  context '/sitemap' do
    before(:each) do
      get "/sitemap"
    end

    it 'should be a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'should render template in xml' do
      expect(response.content_type).to eq 'application/xml'
    end
  end
end
