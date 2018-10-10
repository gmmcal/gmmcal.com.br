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
      if defined?(data_klass)
        instance = data_klass.new(JSON.parse(body), {}, true)
        allow(instance).to receive(:url_for_field).and_return('file.ext')
        allow(Cms::Sync).to receive(:find).and_return(instance)
      end

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

      context 'with About' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'about.json')).to_s }
        let(:klass) { About }

        it_behaves_like 'sync webhook'
      end

      context 'with Education' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'education.json')).to_s }
        let(:klass) { Education }

        it_behaves_like 'sync webhook'
      end

      context 'with Skill' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'skill.json')).to_s }
        let(:klass) { Skill }

        it_behaves_like 'sync webhook'
      end

      context 'with WorkExperience' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'work_experience.json')).to_s }
        let(:klass) { WorkExperience }

        it_behaves_like 'sync webhook'
      end
    end
  end
end
