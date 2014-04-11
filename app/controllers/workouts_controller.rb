class WorkoutsController < ApiController
  
  def index
    #render json: current_user.workouts.all_with_exercises
    render json: current_user.workouts
  end
  
  def show
      @workout = Workout.for_user(current_user).find_by_id(params[:id])
        if @workout
          render json: @workout
        else
          head :not_found
        end
  end
  
  def create
      workout = current_user.workouts.build(workout_params)
      workout.save
      #head :created
      render json: workout
  end
  
  def update
      workout = Workout.for_user(current_user).find_by_id(params[:id])
        if workout
          workout = Workout.find_by_id(params[:id])
          workout.update(workout_params)
          render json: workout
        else
          head :not_found
        end
  end
  
  def destroy
        workout = Workout.for_user(current_user).find_by_id(params[:id])
          if workout
            workout = Workout.find_by_id(params[:id])
            workout.destroy
            head :ok
          else
            head :not_found
          end
  end
  
  private
    def workout_params
        params.require(:workout).permit(:name,:description,:exercises)
    end
  
end
