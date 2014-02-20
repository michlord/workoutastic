Workoutastic.ExercisesRoute = Workoutastic.AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('exercise'/*this.auth_query()*/);
    /*DS.RecordArray is returned. It doesn't have .length defined etc...*/
  },setupController: function(controller, model) {
    controller.set('model', model);
    //controller.set('auth_query',this.auth_query());
  }
});