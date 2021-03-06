class Server < ApplicationRecord
    
    validates :title, presence: true, uniqueness: true, length: {minimum: 3, allow_nil: true}

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel
end
