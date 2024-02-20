Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    
    resources :orders, only: [:index, :show, :create] do
      resources :order_items, only: [:index, :create]
    end


    resources :products, only: [:index, :show] do
      collection do
        get 'search', to: 'products#search'
      end

      # get 'categories/:category', to: 'products#index', as: :products_by_category
    end

    
  end


  get '*path', to: "static_pages#frontend_index"
end
