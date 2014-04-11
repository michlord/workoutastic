Workoutastic.Exercise = DS.Model.extend({
    name:           DS.attr('string'),
    description:   DS.attr('string'),
    image:          DS.attr('string', {default: null}),
    workout:       DS.hasMany('workout')
});