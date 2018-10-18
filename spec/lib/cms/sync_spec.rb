# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cms::Sync do
  describe '#all', vcr: { cassette_name: 'cms/all' } do
    before do
      described_class.all
    end

    shared_examples 'language' do |language|
      it "creates 1 About in '#{language}'" do
        expect(About.with_locale(language).count).to eq(1)
      end

      it "creates 2 Educations in '#{language}'" do
        expect(Education.with_locale(language).count).to eq(2)
      end

      it "creates 18 Skills in '#{language}'" do
        expect(Skill.with_locale(language).count).to eq(18)
      end

      it "creates 8 Work Experiences in '#{language}'" do
        expect(WorkExperience.with_locale(language).count).to eq(8)
      end
    end

    include_examples 'language', :en

    include_examples 'language', :'pt-BR'
  end

  describe '#find' do
    subject(:instance) { described_class.find(id) }

    context 'about', vcr: { cassette_name: 'cms/about' } do
      let(:id) { 'about_id' }

      it 'maps to Cms::About class' do
        expect(instance).to be_instance_of(Cms::About)
      end
    end

    context 'education', vcr: { cassette_name: 'cms/education' } do
      let(:id) { 'education_id' }

      it 'maps to Cms::Education class' do
        expect(instance).to be_instance_of(Cms::Education)
      end
    end

    context 'skill', vcr: { cassette_name: 'cms/skill' } do
      let(:id) { 'skill_id' }

      it 'maps to Cms::Skill class' do
        expect(instance).to be_instance_of(Cms::Skill)
      end
    end

    context 'work experience', vcr: { cassette_name: 'cms/work_experience' } do
      let(:id) { 'work_id' }

      it 'maps to Cms::WorkExperience class' do
        expect(instance).to be_instance_of(Cms::WorkExperience)
      end
    end
  end

  it '#client' do
    expect(described_class.client).to be_instance_of(Contentful::Client)
  end
end
