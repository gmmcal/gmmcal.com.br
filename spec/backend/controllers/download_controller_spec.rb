# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DownloadController, type: :controller do
  let(:sample_pdf) { '%PDF-1.4\ntrailer<</Root<</Pages<</Kids[<</MediaBox[0 0 3 3]>>]>>>>>>' }

  describe 'CV in English' do
    before do
      allow(controller).to receive(:make_pdf).and_return(sample_pdf)

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
    before do
      allow(controller).to receive(:make_pdf).and_return(sample_pdf)

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
