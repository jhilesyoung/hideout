class Server < ApplicationRecord
    
    validates :title, presence: true, uniqueness: true, length: {minimum: 3, allow_nil: true}

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
