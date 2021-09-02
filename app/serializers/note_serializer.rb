class NoteSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_one :user
  has_one :dream
end
