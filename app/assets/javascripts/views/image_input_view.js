Workoutastic.ImageInputView = Ember.View.extend({
  defaultTemplate: Ember.Handlebars.compile(
    '{{view view.InputField}}\
    {{view view.Image}}'
  ),
  imageSource: 'http://placehold.it/64x64',
  InputField: Ember.View.extend({
    tagName: 'input',
    attributeBindings: ['type'],
    type: 'file',
    change: function(e){
      var reader = new FileReader();
      var that = this;
      reader.onload = function(e){
        that.set('parentView.imageSource',e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }),
  Image: Ember.View.extend({
    tagName: 'img',
    classNames: ['image-input'],
    attributeBindings: ['src'],
    src: function(){
      return this.get('parentView.imageSource');
    }.property('parentView.imageSource')
  })
});