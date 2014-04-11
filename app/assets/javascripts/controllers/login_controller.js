Workoutastic.LoginController = Ember.Controller.extend({

    reset: function() {
      this.setProperties({
        email: "",
        password: "",
        errorMessage: ""
      });
    },
  
    token: localStorage.token,
    
    tokenChanged: function() {
        if(this.get('token')){
            localStorage.token = this.get('token');
            
            this.set('loggedIn',true);
        }
        if(this.get('token') == undefined){
            this.set('loggedIn',false);
            this.reset();
        }
    }.observes('token'),
    
    loggedIn: localStorage.token,
  
    actions: {
        login: function() {
            var self = this, data = { user: this.getProperties('email', 'password') };
        
            // Clear out any error messages.
            this.set('errorMessage', null);
        
            $.post('/auth', data).then(function(response) {
                alert('Login succeeded!');
                self.set('token', response.access_token);
                self.set('loggedIn',true);
                var attemptedTransition = self.get('attemptedTransition');
                if (attemptedTransition) {
                  attemptedTransition.retry();
                  self.set('attemptedTransition', null);
                } else {
                  // Redirect to 'articles' by default.
                  self.transitionToRoute('index');
                }
            },function(){
                alert('Login Failed!');
            });
        },
        logout: function(){
            localStorage.removeItem('token');
            this.set('token',undefined);
            window.location.reload(true);
        }
    }
});