# json.key_format! camelize: :lower

messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :author_id, :channel_id
        json.username message.user.username
    end

end