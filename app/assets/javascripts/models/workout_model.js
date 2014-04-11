Workoutastic.Workout = DS.Model.extend({
    name:           DS.attr('string'),
    description:   DS.attr('string'),
    exercises:      DS.hasMany('exercise')
});