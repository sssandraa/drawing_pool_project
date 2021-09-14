Rails.application.routes.draw do
  
  resources :notes, only: [:index, :create]
  resources :dreams, only: [:index, :create, :destroy, :show]
  resources :users, only: [:index, :create, :show]
  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  resources :sessions, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
