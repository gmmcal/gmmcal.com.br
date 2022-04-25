# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EducationListener, type: :listener do
  include Publisher
  let(:cache) { stub_const('Cache', double) }
  let(:locale) { I18n.default_locale }

  before do
    allow(cache).to receive(:delete)
    allow(described_class).to receive(:cache).and_return(cache)
  end

  context 'with change object data event' do
    let(:instance) { instance_double(Education) }

    before do
      allow(instance).to receive(:locale).and_return(locale)

      publish(event, education: instance)
    end

    context 'when triggered create event' do
      let(:event) { :education_created }

      it_behaves_like 'listener' do
        let(:cache_key) { [locale, 'educations'].join('/') }
      end
    end

    context 'when triggered update event' do
      let(:event) { :education_updated }

      it_behaves_like 'listener' do
        let(:cache_key) { [locale, 'educations'].join('/') }
      end
    end

    context 'when triggered destroy event' do
      let(:event) { :education_destroyed }

      it_behaves_like 'listener' do
        let(:cache_key) { [locale, 'educations'].join('/') }
      end
    end
  end

  context 'with reorder event' do
    let(:items) { create_list(:education, 5) }
    let(:ids) { items.map(&:id).shuffle }
    let(:ordered_ids) { Education.ordered.pluck(:id) }

    before do
      publish(:reorder_education, ids: ids)
    end

    it 'reorders ids' do
      expect(ordered_ids).to eq(ids)
    end

    it_behaves_like 'listener' do
      let(:cache_key) { [locale, 'educations'].join('/') }
    end
  end
end
