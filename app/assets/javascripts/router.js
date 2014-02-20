// For more information see: http://emberjs.com/guides/routing/

Workoutastic.Router.map(function() {
    this.route('exercises'),
    this.route('login'),
    this.resource('workouts',{path: '/workouts/'},function(){
        
    }),
    this.resource('workout.new',{path: '/workout/new'}),
    this.resource('workout',{path:'/workout/:id'},function(){
        this.route('edit')
    })
});
