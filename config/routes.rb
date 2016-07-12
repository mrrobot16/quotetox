Rails.application.routes.draw do
  resources :detoxes do
    member do
      get 'days_free'
    end
  end
  resources :quotes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
