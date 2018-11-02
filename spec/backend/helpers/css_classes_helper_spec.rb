# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CssClassesHelper, type: :helper do
  describe '#menu_classes' do
    context 'with dashboard about' do
      before { allow(helper).to receive(:controller_name).and_return(:dashboard) }

      it 'returns active for dashboard' do
        expect(helper.menu_classes(:dashboard)).to include('active')
      end

      it 'returns inactive for about' do
        expect(helper.menu_classes(:about)).not_to include('active')
      end

      it 'returns inactive for educations' do
        expect(helper.menu_classes(:educations)).not_to include('active')
      end

      it 'returns inactive for skills' do
        expect(helper.menu_classes(:skills)).not_to include('active')
      end

      it 'returns inactive for work_experiences' do
        expect(helper.menu_classes(:work_experiences)).not_to include('active')
      end
    end

    context 'with about selected' do
      before { allow(helper).to receive(:controller_name).and_return(:about) }

      it 'returns inactive for dashboard' do
        expect(helper.menu_classes(:dashboard)).not_to include('active')
      end

      it 'returns active for about' do
        expect(helper.menu_classes(:about)).to include('active')
      end

      it 'returns inactive for educations' do
        expect(helper.menu_classes(:educations)).not_to include('active')
      end

      it 'returns inactive for skills' do
        expect(helper.menu_classes(:skills)).not_to include('active')
      end

      it 'returns inactive for work_experiences' do
        expect(helper.menu_classes(:work_experiences)).not_to include('active')
      end
    end

    context 'with educations selected' do
      before { allow(helper).to receive(:controller_name).and_return(:educations) }

      it 'returns inactive for dashboard' do
        expect(helper.menu_classes(:dashboard)).not_to include('active')
      end

      it 'returns inactive for about' do
        expect(helper.menu_classes(:about)).not_to include('active')
      end

      it 'returns active for educations' do
        expect(helper.menu_classes(:educations)).to include('active')
      end

      it 'returns inactive for skills' do
        expect(helper.menu_classes(:skills)).not_to include('active')
      end

      it 'returns inactive for work_experiences' do
        expect(helper.menu_classes(:work_experiences)).not_to include('active')
      end
    end

    context 'with skills selected' do
      before { allow(helper).to receive(:controller_name).and_return(:skills) }

      it 'returns inactive for dashboard' do
        expect(helper.menu_classes(:dashboard)).not_to include('active')
      end

      it 'returns inactive for about' do
        expect(helper.menu_classes(:about)).not_to include('active')
      end

      it 'returns inactive for educations' do
        expect(helper.menu_classes(:educations)).not_to include('active')
      end

      it 'returns active for skills' do
        expect(helper.menu_classes(:skills)).to include('active')
      end

      it 'returns inactive for work_experiences' do
        expect(helper.menu_classes(:work_experiences)).not_to include('active')
      end
    end

    context 'with work_experiences selected' do
      before { allow(helper).to receive(:controller_name).and_return(:work_experiences) }

      it 'returns inactive for dashboard' do
        expect(helper.menu_classes(:dashboard)).not_to include('active')
      end

      it 'returns inactive for about' do
        expect(helper.menu_classes(:about)).not_to include('active')
      end

      it 'returns inactive for educations' do
        expect(helper.menu_classes(:educations)).not_to include('active')
      end

      it 'returns inactive for skills' do
        expect(helper.menu_classes(:skills)).not_to include('active')
      end

      it 'returns active for work_experiences' do
        expect(helper.menu_classes(:work_experiences)).to include('active')
      end
    end
  end

  describe '#tab_classes' do
    context 'with empty params' do
      it 'returns active for english' do
        expect(helper.tab_classes(:en)).to include('active')
      end

      it 'returns inactive for portuguese' do
        expect(helper.tab_classes(:'pt-BR')).not_to include('active')
      end
    end

    context 'with params with locale set to :en' do
      before { allow(helper).to receive(:params).and_return(locale: :en) }

      it 'returns active for english' do
        expect(helper.tab_classes(:en)).to include('active')
      end

      it 'returns inactive for portuguese' do
        expect(helper.tab_classes(:'pt-BR')).not_to include('active')
      end
    end

    context 'with params with locale set to :pt-BR' do
      before { allow(helper).to receive(:params).and_return(locale: :'pt-BR') }

      it 'returns inactive for english' do
        expect(helper.tab_classes(:en)).not_to include('active')
      end

      it 'returns active for portuguese' do
        expect(helper.tab_classes(:'pt-BR')).to include('active')
      end
    end
  end
end
