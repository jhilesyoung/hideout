class Channel < ApplicationRecord 
    validates :title, presence: true

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User
    

end