Workoutastic.ApplicationRoute = Ember.Route.extend({
  actions: {
    showModal: function(options) {
      this.controllerFor(options.modalName).setProperties(options.properties);
      this.render(options.modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    dismissModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});