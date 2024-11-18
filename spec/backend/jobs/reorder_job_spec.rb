# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ReorderJob, type: :job do
  include ActiveJob::TestHelper

  before do
    allow(Rails.cache).to receive(:delete)
  end

  context 'when reordering work experiences' do
    let(:work_experiences) { create_list(:work_experience, 5) }
    let(:ids) { work_experiences.map(&:id).shuffle }

    it 'sorts work experiences' do
      perform_enqueued_jobs do
        described_class.perform_later(ids: ids, model: :work_experiences)
      end
      expected_ids = WorkExperience.ordered.map(&:id)
      expect(expected_ids).to eq(ids)
    end

    it 'cleans cache after reordering' do
      perform_enqueued_jobs do
        described_class.perform_later(ids: ids, model: :work_experiences)
      end
      expect(Rails.cache).to have_received(:delete).exactly(5).times
    end
  end

  context 'when reordering educations' do
    let(:educations) { create_list(:education, 5) }
    let(:ids) { educations.map(&:id).shuffle }

    it 'sorts educations' do
      perform_enqueued_jobs do
        described_class.perform_later(ids: ids, model: :educations)
      end
      expected_ids = Education.ordered.map(&:id)
      expect(expected_ids).to eq(ids)
    end

    it 'cleans cache after reordering' do
      perform_enqueued_jobs do
        described_class.perform_later(ids: ids, model: :educations)
      end
      expect(Rails.cache).to have_received(:delete).exactly(5).times
    end
  end
end
