Workoutastic.ExercisesController = Ember.ArrayController.extend(Workoutastic.SearchableMixin,Workoutastic.PageableMixin,{
  actions: {
    deleteExercise: function(id){
      var exercise = this.store.find('exercise',id).then(function(model){
        model.deleteRecord();
        model.save();
      });
    },
    showNewExerciseModal: function(){
      this.get('target').send('showModal',{
        modalName: 'new_exercise_modal',
        properties: {name: '', description: '', image: ''}
      });
    },
    showEditExerciseModal: function(id){
      var that = this;
      var exercise = this.store.find('exercise',id).then(function(record){
        var name        = record.get('name'),
            description = record.get('description'),
            image       = record.get('image');
            
        that.get('target').send('showModal',{
          modalName: 'edit_exercise_modal',
          properties: { id: id, name: name, description: description, image: image}
        });
      });     
    }
  }
});