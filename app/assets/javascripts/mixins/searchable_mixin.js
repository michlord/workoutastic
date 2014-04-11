Workoutastic.SearchableMixin = Ember.Mixin.create({
  searchString: '',
  filteredContent: function(){
    var searchString = this.get('searchString');
    if(searchString == ''){
      return this.get('content');
    } else {
        try {
        var re = new RegExp(searchString,'i');
      return this.get('arrangedContent').filter(function(item){
        return re.test(item.get('name'));
      });
    } catch(e) {
        //alert(e);
        return this.get('arrangedContent');
    }
      
    }
  }.property('arrangedContent.@each','searchString')
});
