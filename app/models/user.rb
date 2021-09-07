class User < ApplicationRecord
    has_many :dreams, dependent: :destroy 
    has_many :notes, dependent: :destroy 

    validates :name, presence: true, uniqueness: true
end
