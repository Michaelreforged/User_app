Rails.application.routes.draw do

  root "users#home"

  get "/users", to: "users#index"
  get "/users/new", to: "users#new"
  post "/users", to: "users#create"
  get "/users/:id", to: "users#show"
  get "/users/:id/edit", to: "users#index"
  patch "/users/:id", to: "users#update"
  put "/users/:id", to: "users#update"
  delete "/users/:id", to: "users#destroy"
   
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
