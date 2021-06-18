class ChatChannel < ApplicationCable::Channel
  # helper_method :current_user
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    message = Message.new(body: data['message'], channel_id: data["channelId"], author_id: data["authorId"]) 
    if message.save!
      user = message.user
      messageResponse = { body: message.body, username: user.username }
      socket = { message: messageResponse, type: 'message'} 
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end
  def load(data)
    puts data[:id]
    messages = Message.where(channel_id: data["id"])
    messageResponse = messages.map do |message|
                      {body: message.body, username: message.user.username}
    end
    socket = { messages: messageResponse, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end
end

#stream from specific channel, get rid of load function and use controller to create instance 
#messages = Message.find_by(params)

#define a method called speak. 
#This method will receive data, 
#manipulate that data to create a new instance of a Message, 
#and then broadcast that new message into the stream