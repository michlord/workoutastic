Workoutastic.PageableMixin = Ember.Mixin.create({
  currentPage: 0,
  itemsPerPage: 5,
  totalPages: function(){
    return Math.ceil(this.get('filteredContent.length') / this.get('itemsPerPage'));
  }.property('filteredContent','itemsPerPage'),
  paginatedContent: function(){
    var start = this.get('currentPage')*this.get('itemsPerPage');
    var end = start + this.get('itemsPerPage');
    return this.get('filteredContent').slice(start,end);
  }.property('currentPage','itemsPerPage','filteredContent'),
  actions: {
    nextPage: function(){
      if (this.get('currentPage')+1 == this.get('totalPages')) {
        return;
      } else {
        this.set('currentPage',this.get('currentPage')+1);
      }
    },
    prevPage: function(){
      if (this.get('currentPage') == 0) {
        return;
      } else {
        this.set('currentPage',this.get('currentPage')-1);
      }
    },
    goToPage: function(index){
      if( index < 0 && index >= this.get('totalPages')){
        return;
      } else {
        this.set('currentPage',index);
      }
    }
  }

});