Workoutastic.WorkoutNewRoute = Workoutastic.AuthenticatedRoute.extend({
  model: function() {
    return this.store.createRecord('workout');
  },
  actions: {
    create: function(model){
        var that = this;
        model.save().then(function(){
            that.transitionTo('workouts');
        });
    },
    cancel: function(model) {
        this.store.deleteRecord(model);
        this.transitionTo('workouts');
    }
  }
});