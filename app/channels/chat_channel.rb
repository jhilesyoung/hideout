class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    message = Message.new(body: data['message'])
    if message.save
      socket = { message: message.body, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end
  def load(channel_id)
    messages = Message.find_by(channel_id).collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end


  #messages = Message.find_by(params[:channel_id])
end

#define a method called speak. 
#This method will receive data, 
#manipulate that data to create a new instance of a Message, 
#and then broadcast that new message into the stream