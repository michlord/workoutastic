Workoutastic::Application.routes.draw do
  root  "ember#start"
  get 'workouts/', to: 'workouts#index'
  get 'workouts/:id', to: 'workouts#show'
  post 'workouts', to: 'workouts#create'
  put 'workouts/:id', to: 'workouts#update'
  delete 'workouts/:id', to:'workouts#destroy'
    
  get 'exercises/', to: 'exercises#index'
  get 'exercises/:id', to: 'exercises#show'
  post 'exercises', to: 'exercises#create'
  put 'exercises/:id', to: 'exercises#update'
  post 'exercises/update/:id', to: 'exercises#update'
  delete 'exercises/:id', to:'exercises#destroy'
  post 'exercises/:id', to: 'exercises#update'
  
  post 'auth', to: 'auth#authenticate'
end
