Workoutastic.AuthenticatedRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    if (!this.controllerFor('login').get('token')) {
      this.redirectToLogin(transition);
    } else {
        Workoutastic.access_token = this.controllerFor('login').get('token');
    }
  },

  redirectToLogin: function(transition) {
    alert('You must log in!');

    var loginController = this.controllerFor('login');
    loginController.set('attemptedTransition', transition);
    this.transitionTo('login');
  },

  actions: {
    error: function(reason, transition) {
      if (reason.status === 401) {
        this.redirectToLogin(transition);
      } else {
        alert(reason);
        alert('Something went wrong');
      }
    }
  },
  auth_query: function(){
     return {access_token: this.controllerFor('login').get('token')};
  }
});