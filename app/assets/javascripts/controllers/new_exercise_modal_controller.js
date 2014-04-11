Workoutastic.NewExerciseModalController = Workoutastic.ExerciseModalController.extend({
  actions: {
    save: function(){
        var name        = this.get('name'),
            description = this.get('description'),
            image       = this.get('image');
        var exercise = this.store.createRecord('exercise',{
          name: name,
          description: description,
          image: image,
        });
        exercise.save();
        this.get('target').send('dismissModal');
    }
  }
});