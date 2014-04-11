class CreateExerciseLists < ActiveRecord::Migration
  def change
    create_table :exercise_lists do |t|
      t.belongs_to :exercise
      t.belongs_to :workout
      t.integer :order

      t.timestamps
    end
  end
end
