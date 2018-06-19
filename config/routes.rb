# frozen_string_literal: true

Rails.application.routes.draw do
  get '/(:locale)', to: 'home#index', as: :home, locale: /en|pt-BR/
  get 'sitemap', to: 'home#index', defaults: { format: :xml }
  post 'contentful/update', to: 'contentful#update'
end
