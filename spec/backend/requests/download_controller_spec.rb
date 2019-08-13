# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DownloadController, type: :request do
  describe 'CV in English' do
    before do
      create(:about, locale: :en)
      create_list(:work_experience, 5, locale: :en)
      create_list(:skill, 30, locale: :en)
      create_list(:education, 3, :finished, locale: :en)

      get '/en/cv'
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
      create(:about, locale: :'pt-BR')
      create_list(:work_experience, 5, locale: :'pt-BR')
      create_list(:skill, 30, locale: :'pt-BR')
      create_list(:education, 3, :finished, locale: :'pt-BR')

      get '/pt-BR/cv'
    end

    it 'is a success' do
      expect(response).to have_http_status(:ok)
    end

    it 'renders template in pdf' do
      expect(response.content_type).to eq 'application/pdf'
    end
  end
end
