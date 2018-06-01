require 'rails_helper'

RSpec.describe ContentfulController, type: :request do
  context '#update' do
    let(:headers) do
      {
        'X-Contentful-Topic': 'ContentManagement.Entry.publish',
        'X-Contentful-Webhook-Name': 'Content',
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'HTTP_AUTHORIZATION': ActionController::HttpAuthentication::Basic.encode_credentials('gmmcal', 'gmmcal')
      }
    end

    let(:body) { '' }

    before(:each) do
      allow_any_instance_of(Cms::About).to receive(:url_for_field).and_return('file.ext')

      post '/contentful/update', params: body, headers: headers
    end

    context 'Without authentication' do
      let(:headers) do
        {
          'X-Contentful-Topic': 'ContentManagement.Entry.publish',
          'X-Contentful-Webhook-Name': 'Content',
          'Content-Type': 'application/vnd.contentful.management.v1+json',
        }
      end

      it 'should fail' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'With authentication' do
      shared_examples_for 'sync webhook' do
        it 'should be successful' do
          expect(response).to have_http_status(:no_content)
        end

        it 'should create one in english' do
          expected_count = klass.with_locale(:en).count()
          expect(expected_count).to eq(1)
        end

        it 'should create one in portuguese' do
          expected_count = klass.with_locale(:en).count()
          expect(expected_count).to eq(1)
        end
      end

      context 'About' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'about.json')).to_s }
        let(:klass) { About }

        it_behaves_like 'sync webhook'
      end

      context 'Education' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'education.json')).to_s }
        let(:klass) { Education }

        it_behaves_like 'sync webhook'
      end

      context 'Skill' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'skill.json')).to_s }
        let(:klass) { Skill }

        it_behaves_like 'sync webhook'
      end

      context 'WorkExperience' do
        let(:body) { File.read(Rails.root.join('spec', 'fixtures', 'work_experience.json')).to_s }
        let(:klass) { WorkExperience }

        it_behaves_like 'sync webhook'
      end
    end
  end
end
