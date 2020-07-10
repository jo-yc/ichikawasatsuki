Rails.application.routes.draw do
  root to: 'vue_application#index'
  # get '/*path', to: 'vue_application#index'

  resources :about, only: :index, to: 'vue_application#index'
  resources :gallery, only: %i[index], to: 'vue_application#index'
  resources :works, only: %i[index show], to: 'vue_application#index'
  resources :books, only: %i[index], to: 'vue_application#index'
  resources :contact, only: :index, to: 'vue_application#index'
  resources :policy, controller: :policy, only: :index, to: 'vue_application#index'

  namespace :api do
    resource :contact, controller: 'contact'
    resource :about, controller: 'about'
  end

  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
