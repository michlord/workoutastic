// http://emberjs.com/guides/models/using-the-store/

Workoutastic.access_token = null;

DS.ActiveModelAdapter.reopen({
  ajaxOptions: function(url, type, hash) {
    hash = hash || {};
    hash.data = hash.data || {};
    if(Workoutastic.access_token){
      hash.data.access_token = Workoutastic.access_token;
    }
    return this._super(url,type,hash);
  }

});

//DS.ActiveModelAdapter.reopen({
//  ajax: function (url, type, hash) {
//            hash.url = url;
//            hash.type = type;
//            hash.dataType = 'jsonp';
//            hash.contentType = 'application/json; charset=utf-8';
//            hash.context = this;
//            if (hash.data && type !== 'GET') {
//                hash.data = JSON.stringify(hash.data);
//            }
//            hash.data.access_token = 'blablabla';
//            jQuery.ajax(hash);
//        },
//});

Workoutastic.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: DS.ActiveModelAdapter
});
