Workoutastic.WorkoutsRoute = Workoutastic.AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('workout');
  },setupController: function(controller, model) {
    controller.set('model', model);
  },
  actions: {
    goToNewWorkout: function(){
        this.transitionTo('workout.new');
    },
    goToWorkout: function(model) {
        this.transitionTo('workout',model);
    },
    edit: function(model){
        this.transitionTo('workout.edit',model);
    },
    remove: function(model){
        this.store.deleteRecord(model);
        model.save();
    }
  }
});