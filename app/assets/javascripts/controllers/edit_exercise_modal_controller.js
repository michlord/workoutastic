//= require ./exercise_modal_controller
Workoutastic.EditExerciseModalController = Workoutastic.ExerciseModalController.extend({
  actions: {
    save: function(){
      var that = this;
      var exercise = this.store.find('exercise',this.get('id')).then(function(record){
        record.set('name',that.get('name'));
        record.set('description',that.get('description'));
        record.set('image',that.get('image'));
        record.save();
        that.get('target').send('dismissModal');
      });
    }
  }
});