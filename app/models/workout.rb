class Workout < ActiveRecord::Base
    validates :name, :description, presence: true
    has_many :exercise_lists
    has_many :exercises, through: :exercise_lists
    belongs_to :user
    validate :exercise_doesnt_belong
    scope :for_user, lambda { |user| joins(:user).where("user_id = ?", user.id) }
    def exercise_list
        self.exercise_lists.order(order: :asc).map do |e|
            e.exercise
        end
    end
    def self.all_with_exercises
        self.all.map do |w|
            { workout: w, exercises: w.exercise_list }
        end
    end
    private
        def exercise_doesnt_belong
            self.exercise_lists.each do |e|
                if e.exercise.user != self.user
                    errors.add(:exercise_belongs_to, "some exercise doesn't belong to this workout")
                end
            end
        end
end
