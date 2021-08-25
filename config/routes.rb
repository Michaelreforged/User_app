Rails.application.routes.draw do

  root "users#home"

  get "/users", to: "users#index"
  get "/users/new", to: "users#new"
  post "/users", to: "users#create"
  get "/users/:id", to: "users#show"
  get "/users/:id/edit", to: "users#edit"
  patch "/users/:id", to: "users#update"
  put "/users/:id", to: "users#update"
  delete "/users/:id", to: "users#destroy"

  get "/foods", to: "foods#index"
  get "/foods/new", to: "foods#new"
  post "/foods", to: "foods#create"
  get "/foods/:id", to: "foods#show"
  get "/foods/:id/edit", to: "foods#edit"
  patch "/foods/:id", to: "foods#update"
  put "/foods/:id", to: "foods#update"
  delete "/foods/:id", to: "foods#destroy"
   
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
