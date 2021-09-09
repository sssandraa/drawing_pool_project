class DreamSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :date_time
  has_one :user
  has_many :notes
end
