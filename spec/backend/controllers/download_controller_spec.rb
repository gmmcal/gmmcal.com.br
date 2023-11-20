# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DownloadController, type: :controller do
  before do
    create(:about, locale: locale)
    create_list(:work_experience, 5, locale: locale)
    create_list(:education, 3, locale: locale)
  end

  describe 'CV in English' do
    let(:locale) { 'en' }

    before do
      get :cv, params: { locale: 'en' }
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in pdf' do
      expect(response.content_type).to eq 'application/pdf'
    end
  end

  describe 'CV in Portuguese' do
    let(:locale) { 'pt-BR' }

    before do
      get :cv, params: { locale: 'pt-BR' }
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in pdf' do
      expect(response.content_type).to eq 'application/pdf'
    end
  end
end
