# frozen_string_literal: true

Rails.application.routes.draw do
  get '/(:locale)', to: 'home#index', as: :home, locale: /en|pt-BR/
  get 'sitemap', to: 'home#index', defaults: { format: :xml }
  post 'contentful/update', to: 'contentful#update'

  namespace :admin do
    root 'dashboard#index'

    resources :abouts, controller: :about, path: :about
    resources :educations
    resources :skills
    resources :work_experiences
  end
end
