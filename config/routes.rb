Rails.application.routes.draw do
  root to: 'home#index'
  get 'sitemap', to: "home#index", defaults: { format: :xml }
end
