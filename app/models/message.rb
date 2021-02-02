class Message < ApplicationRecord

    validates :body, presence: true
    
    belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Channel

    belongs_to :user,
    primary_key: :id,
    foreign_key: :message_id,
    class_name: :User
end
