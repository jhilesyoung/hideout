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
  def load
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end

end
#messages = Message.find_by(params)

#define a method called speak. 
#This method will receive data, 
#manipulate that data to create a new instance of a Message, 
#and then broadcast that new message into the stream