# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::SessionsController, type: :controller do
  let(:email) { 'email@example.com' }
  let(:password) { 'password2018' }
  let(:locale) { :en }
  let(:attributes) { { email: email, password: password } }

  before do
    # rubocop:disable RSpec/InstanceVariable
    @request.env['devise.mapping'] = Devise.mappings[:user]
    # rubocop:enable RSpec/InstanceVariable
    create(:user, email: email, password: password, default_locale: locale)
  end

  describe 'POST #create' do
    context 'with user locale set to english' do
      it 'login message is in english' do
        post :create, params: { user: attributes }
        expect(flash[:notice]).to eq(I18n.t(:signed_in, scope: %i[devise sessions], locale: locale))
      end
    end

    context 'with user locale set to portuguese' do
      let(:locale) { :'pt-BR' }

      it 'login message is in portuguese' do
        post :create, params: { user: attributes }
        expect(flash[:notice]).to eq(I18n.t(:signed_in, scope: %i[devise sessions], locale: locale))
      end
    end
  end
end
