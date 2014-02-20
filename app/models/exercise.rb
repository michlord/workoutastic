class Exercise < ActiveRecord::Base
    validates :name, :description, presence: true
    has_many :exercise_lists
    has_many :workouts, through: :exercise_lists
    belongs_to :user
    scope :for_user, lambda { |user| joins(:user).where("user_id = ?", user.id) }
end
