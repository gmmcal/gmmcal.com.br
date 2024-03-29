# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SkillListener, type: :listener do
  include Publisher
  let(:instance) { instance_double(Skill) }
  let(:cache) { stub_const('Cache', double) }
  let(:locale) { I18n.default_locale }

  before do
    allow(instance).to receive(:locale).and_return(locale)
    allow(cache).to receive(:delete)
    allow(described_class).to receive(:cache).and_return(cache)

    publish(event, skill: instance)
  end

  context 'when triggered create event' do
    let(:event) { :skill_created }

    it_behaves_like 'listener' do
      let(:cache_key) { [locale, 'skills'].join('/') }
    end
  end

  context 'when triggered update event' do
    let(:event) { :skill_updated }

    it_behaves_like 'listener' do
      let(:cache_key) { [locale, 'skills'].join('/') }
    end
  end

  context 'when triggered destroy event' do
    let(:event) { :skill_destroyed }

    it_behaves_like 'listener' do
      let(:cache_key) { [locale, 'skills'].join('/') }
    end
  end
end
