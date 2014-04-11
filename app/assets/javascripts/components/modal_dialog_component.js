Workoutastic.ModalDialogComponent = Ember.Component.extend({
  didInsertElement: function () {
    var self = this;
    this.$('.modal').modal('show');
    this.$('.modal').on("hidden.bs.modal", function () {
      self.sendAction('hide');
    });
  },
  willDestroyElement: function () {
    this.$('.modal').modal('hide');  
  }
  
});