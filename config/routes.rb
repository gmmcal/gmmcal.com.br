# frozen_string_literal: true

Rails.application.routes.draw do
  get '/(:locale)', to: 'home#index', as: :home, locale: /en|br/
  get 'sitemap', to: 'home#index', defaults: { format: :xml }
end
