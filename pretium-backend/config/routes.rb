Rails.application.routes.draw do
  resources :saved_searches
  resources :request_ratings
  resources :users
  # mount_devise_token_auth_for 'User', at: 'auth'
  resources :ratings
  resources :skills
  resources :teachers
  resources :students
  resources :colleges
  post '/users/login', to: 'users#login'
  get 'skills_categories', to: 'skills#skills_categories'
  get 'skills_sub_categories', to: 'skills#skills_sub_categories'
  get 'metrics', to: 'ratings#metrics'
  get 'reports', to: 'reports#reports'
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
