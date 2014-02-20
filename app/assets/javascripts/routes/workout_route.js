Workoutastic.WorkoutRoute = Workoutastic.AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('workout',params.id);
  },
  actions:{
    goToWorkouts: function(){
         this.transitionTo('workouts');
    },
    edit: function(model){
        this.transitionTo('workout.edit',model);
    },
    create: function(model){
        var that = this;
        model.save().then(function(){
            that.transitionTo('workout',model);
        });
    },
    cancel: function(model) {
        this.transitionTo('workout',model);
    }
  
  }
});