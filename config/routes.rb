Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#show'
  resource :home, controller: :home, only: :show
  resource :about, controller: :about, only: :show
  resource :contact, controller: :contact, only: [:show, :create, :update] do
    get :connect, on: :collection
  end
  resources :gallery, controller: :gallery, only: [:index, :show]

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
