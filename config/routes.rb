# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  scope '(:locale)' do
    get '/', to: 'home#index', as: :home, locale: /en|pt-BR/
    get '/cv(/:disposition)', to: 'download#cv', as: :cv, disposition: /attachment|inline/, defaults: { disposition: :attachment }
  end

  get 'sitemap', to: 'home#index', defaults: { format: :xml }

  get 'manifest', to: 'pwa#manifest', defaults: { format: :json }
  get 'service-worker', to: 'pwa#worker', defaults: { format: :js }
  get 'offline', to: 'pwa#offline'

  devise_for :users, path: 'admin', path_names: {
    sign_in: 'login',
    sign_out: 'logout'
  }, controllers: { sessions: 'admin/sessions' }

  namespace :admin do
    root 'about#index'

    resources :abouts, controller: :about, path: :about, except: %i[new show]
    resources :educations, except: :show
    resources :skills, except: :show
    resources :work_experiences, except: :show
    resource :user, controller: :user, only: %i[edit update]
    resource :reorder, only: :update, controller: :reorder
  end

  get '404', to: 'errors#not_found'
  get '422', to: 'errors#unacceptable'
  get '500', to: 'errors#internal_error'
end
