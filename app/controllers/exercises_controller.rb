class ExercisesController < ApiController
  def index
        #render json: {exercises: current_user.exercises}
        render json: current_user.exercises
  end
  
  def show
        @exercise = Exercise.for_user(current_user).find_by_id(params[:id])
        if @exercise
          render json: @exercise
        else
          head :not_found
        end
  end
  
 #example request
 #curl -X POST -d "exercise%5Bdescription%5D=test_description&exercise%5Bname%5D=test_exercise"  "http://192.168.1.79:3000/exercises?access_token=5dbd41e38dfd439c42770b51b7bc731d"
 #another thing good to remember is rails to_query method for hash
 #it returns a URL string for hash
 #you call it like {key: value}.to_query
  def create
        exercise = current_user.exercises.build(exercise_params)
        exercise.save
        #head :created
        render json: exercise
  end
  
  def update
        exercise = Exercise.for_user(current_user).find_by_id(params[:id])
        if exercise
          exercise = Exercise.find_by_id(params[:id])
          exercise.update(exercise_params)
          render json: exercise
        else
          head :not_found
        end
  end
  
  def destroy
        exercise = Exercise.for_user(current_user).find_by_id(params[:id])
          if exercise
            exercise = Exercise.find_by_id(params[:id])
            exercise.destroy
            head :ok
          else
            head :not_found
          end
  end
  
  private
    def exercise_params
        params.require(:exercise).permit(:name,:description,:image)
    end
end
