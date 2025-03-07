# frozen_string_literal: true

Rails.application.routes.draw do
  root "home#index"

  get "up", to: "rails/health#show", as: :rails_health_check

  scope "(:locale)", locale: /en|pt-BR/ do
    get "/", to: "home#index", as: :home
    get "/cv(/:disposition)", to: "download#cv", as: :cv, disposition: /attachment|inline/,
                              defaults: { disposition: :attachment }
    scope "content" do
      get "/education", to: "educations#index", as: :educations
      get "/skills", to: "skills#index", as: :skills
      get "/work-experience", to: "work_experiences#index", as: :work_experiences
    end
  end

  get "sitemap", to: "home#index", defaults: { format: :xml }

  get "manifest", to: "pwa#manifest", defaults: { format: :json }
  get "service-worker", to: "pwa#worker", defaults: { format: :js }
  get "offline", to: "pwa#offline"

  namespace :admin do
    root "about#index"
    resource :session

    resources :abouts, controller: :about, path: :about, except: %i[new show]
    resources :educations, except: :show
    resources :skills, except: :show
    resources :work_experiences, except: :show
    resource :user, controller: :user, only: %i[edit update]
    resource :reorder, only: :update, controller: :reorder
  end

  get "404", to: "errors#not_found"
  get "422", to: "errors#unacceptable"
  get "500", to: "errors#internal_error"
end
