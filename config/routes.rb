Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]

    resources :servers, only: [:create, :show, :index, :destroy] do
      resources :channels, only: [:create, :show, :index, :destroy]
    end

    resource :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end
