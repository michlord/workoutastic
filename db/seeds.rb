# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

password = Digest::SHA1.hexdigest('ziomek')

user = User.create(email: 'michal.zimi@gmail.com', password: password)
api_key = ApiKey.new
api_key.user = user
api_key.save

user2 = User.create(email: 'stokyk@gmail.com', password: password)
api_key2 = ApiKey.new
api_key2.user = user2
api_key2.save

sample_image = "data:image/jpeg;base64,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"

pushups = Exercise.create(name: 'Pushups', description: 'Push yourself against the ground', user: user, image: sample_image )
pullups   = Exercise.create(name: 'Pullups', description: 'Pull yourself up on a bar', user: user, image: sample_image)
squats    = Exercise.create(name: 'Squats', description: 'Sit down and stand up', user: user, image: sample_image)

squats2    = Exercise.create(name: 'Squats', description: 'Sit down and stand up', user: user2, image: sample_image)
curls         = Exercise.create(name: 'Curls', description: 'dd', user: user2, image: sample_image)

for i in 0..50
    Exercise.create(name: 'Exercise'+i.to_s, description: 'Sample description for exercise'+i.to_s, user: user, image: sample_image)
end


legs_workout          = Workout.create(name: 'Legs workout', description: 'Lets do some squats', user: user)
shoulders_workout = Workout.create(name: 'Shoulders workout', description: 'Best exercises for shoulders are pushups and pullups', user: user)

shoulders_workout.exercise_lists.create(exercise: pullups, order: 2)
shoulders_workout.exercise_lists.create(exercise: pushups, order: 1)
legs_workout.exercise_lists.create(exercise: squats, order: 1)

workout_for_user2 = Workout.create(name: 'Mixed workout', description: 'Overall body training', user: user2)
workout_for_user2.exercise_lists.create(exercise: squats2, order: 1)
workout_for_user2.exercise_lists.create(exercise: curls, order: 2)
#what happens if workout for user2 is assigned an exercise from user1?
#it won't validate (good)

for i in 0..12
    sample_workout = Workout.create(name: 'Sample workout'+i.to_s, description: 'Sample workout description'+i.to_s, user: user)
    for i in 0..4
        sample_workout.exercise_lists.create(exercise: pushups, order: i)
    end
end
