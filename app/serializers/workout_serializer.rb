class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  embed :ids, include: true
  has_many :exercises
end
