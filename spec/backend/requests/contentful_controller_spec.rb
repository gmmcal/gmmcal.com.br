# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContentfulController, type: :request do
  describe '#update' do
    let(:headers) do
      {
        'X-Contentful-Topic': 'ContentManagement.Entry.publish',
        'X-Contentful-Webhook-Name': 'Content',
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'HTTP_AUTHORIZATION': ActionController::HttpAuthentication::Basic.encode_credentials(ENV['CONTENTFUL_USERNAME'], ENV['CONTENTFUL_PASSWORD'])
      }
    end

    let(:body) { '' }

    before do
      file_en = File.open(Rails.root.join('spec', 'backend', 'support', 'assets', 'cv-en.pdf'), 'rb')
      file_br = File.open(Rails.root.join('spec', 'backend', 'support', 'assets', 'cv-br.pdf'), 'rb')
      allow_any_instance_of(Cms::Base).to receive(:download_file).and_return(file_en, file_br)

      post '/contentful/update', params: body, headers: headers
    end

    context 'without authentication' do
      let(:headers) do
        {
          'X-Contentful-Topic': 'ContentManagement.Entry.publish',
          'X-Contentful-Webhook-Name': 'Content',
          'Content-Type': 'application/vnd.contentful.management.v1+json'
        }
      end

      it 'fails' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'with authentication' do
      let(:data_klass) { "Cms::#{klass}".constantize }

      shared_examples_for 'sync webhook' do
        it 'is successful' do
          expect(response).to have_http_status(:no_content)
        end

        it 'creates one in english' do
          expected_count = klass.with_locale(:en).count
          expect(expected_count).to eq(1)
        end

        it 'creates one in portuguese' do
          expected_count = klass.with_locale(:'pt-BR').count
          expect(expected_count).to eq(1)
        end
      end

      context 'with About', vcr: { cassette_name: 'cms/about' } do
        let(:body) { File.read(Rails.root.join('spec', 'backend', 'fixtures', 'about.json')).to_s }
        let(:klass) { About }

        it_behaves_like 'sync webhook'
      end

      context 'with Education', vcr: { cassette_name: 'cms/education' } do
        let(:body) { File.read(Rails.root.join('spec', 'backend', 'fixtures', 'education.json')).to_s }
        let(:klass) { Education }

        it_behaves_like 'sync webhook'
      end

      context 'with Skill', vcr: { cassette_name: 'cms/skill' } do
        let(:body) { File.read(Rails.root.join('spec', 'backend', 'fixtures', 'skill.json')).to_s }
        let(:klass) { Skill }

        it_behaves_like 'sync webhook'
      end

      context 'with WorkExperience', vcr: { cassette_name: 'cms/work_experience' } do
        let(:body) { File.read(Rails.root.join('spec', 'backend', 'fixtures', 'work_experience.json')).to_s }
        let(:klass) { WorkExperience }

        it_behaves_like 'sync webhook'
      end
    end
  end
end
