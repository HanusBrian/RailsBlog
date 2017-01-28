Rails.application.routes.draw do

  root 'landing#index'

  get 'game/index'
  get 'game/show'

  get 'home/index'

  resources :posts do
    member do
      get :delete
    end
  end
  # get 'posts/index'
  # get 'posts/new'
  # get 'posts/edit'
  # get 'posts/delete'
  # get 'posts/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
