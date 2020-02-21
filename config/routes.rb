Rails.application.routes.draw do
  root to: 'vue_application#index'
  # get '/*path', to: 'vue_application#index'

  resource :about, only: :show, to: 'vue_application#index'
  resources :gallery, only: %i[index show], to: 'vue_application#index'
  resource :contact, only: :show, to: 'vue_application#index'
  resource :policy, controller: :policy, only: :show, to: 'vue_application#index'

  namespace :api do
    resource :contact, controller: 'contact'
  end

  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
