class User < ApplicationRecord
    has_many :dreams, dependent: :destroy 
    has_many :notes, dependent: :destroy 
end
