# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CacheCleanupJob, type: :job do
  include ActiveJob::TestHelper

  before do
    allow(Rails.cache).to receive(:delete)
  end

  context 'when triggered by a about change' do
    let(:about) { create(:about) }

    it 'Cleans cache' do
      perform_enqueued_jobs do
        described_class.perform_later(id: about.id, model: :about)
      end
      expect(Rails.cache).to have_received(:delete).with("#{about.locale}/about")
    end
  end

  context 'when triggered by a education change' do
    let(:education) { create(:education) }

    it 'Cleans cache' do
      perform_enqueued_jobs do
        described_class.perform_later(id: education.id, model: :educations)
      end
      expect(Rails.cache).to have_received(:delete).with("#{education.locale}/educations")
    end
  end

  context 'when triggered by a work experience change' do
    let(:work_experience) { create(:work_experience) }

    it 'Cleans cache' do
      perform_enqueued_jobs do
        described_class.perform_later(id: work_experience.id, model: :work_experiences)
      end
      expect(Rails.cache).to have_received(:delete).with("#{work_experience.locale}/work_experiences")
    end
  end

  context 'when triggered by a skill change' do
    let(:skill) { create(:skill) }

    it 'Cleans cache' do
      perform_enqueued_jobs do
        described_class.perform_later(id: skill.id, model: :skills)
      end
      expect(Rails.cache).to have_received(:delete).with("#{skill.locale}/skills")
    end
  end
end
