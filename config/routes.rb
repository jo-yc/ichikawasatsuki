Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#show'
  resource :home, controller: :home, only: :show
  resource :about, controller: :about, only: :show
end
