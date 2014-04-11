Workoutastic.PaginationView = Ember.View.extend({
  templateName: 'pagination',
  amountOfPageButtons: 6,
  pages: function(){
    var result = [];
    var currentPage         = this.get('controller.currentPage'),
        totalPages          = this.get('controller.totalPages'),
        itemsPerPage        = this.get('controller.itemsPerPage');
    if(totalPages <= 1){
      return false;
    }
    var length = Math.floor(this.get('amountOfPageButtons')/2);
    var start = currentPage - length;
    var end = totalPages < currentPage + length ? totalPages : currentPage + length;
    if( start < 0 ){
      end = totalPages < end - start ? totalPages : end - start;
      start = 0;
    }
    if( end == totalPages ){
      start = totalPages-this.get('amountOfPageButtons');
      start = start < 0 ? 0 : start;
    }
    for(var i=start;i<end;++i){
      result.push(i);
    }
    return result;
  }.property('controller.totalPages', 'controller.currentPage'),
  isPrevDisabled: function(){
    return this.get('controller.currentPage') == 0;
  }.property('controller.currentPage'),
  isNextDisabled: function(){
    return this.get('controller.currentPage') == this.get('controller.totalPages')-1;
  }.property('controller.currentPage', 'controller.totalPages'),
  actions: {
    nextPage: function(){
      this.get('controller').send('nextPage');
    },
    prevPage: function(){
      this.get('controller').send('prevPage');
    }
  },
  PageButton : Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['isCurrent'],
    isCurrent: function () {
      return this.get('content') == this.get('parentView.controller.currentPage') ? 'active' : '';
    }.property('parentView.controller.currentPage'),
    actions:{
      goToPage: function () {
        this.set('parentView.controller.currentPage', this.get('content'));
      }
    }
  })
});