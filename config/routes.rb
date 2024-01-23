Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :products, only: [:index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    get 'products/search', to: "products#search"
  end


  get '*path', to: "static_pages#frontend_index"
end
