Workoutastic.ExerciseModalController = Ember.Controller.extend({
  name: '',
  description: '',
  image: '',
  canSave: function(){
    var name        = this.get('name'),
        description = this.get('description'),
        image       = this.get('image');
    return name != '' && description != '' && image != '';
  }.property('name','description','image')
});