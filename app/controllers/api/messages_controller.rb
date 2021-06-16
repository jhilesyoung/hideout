class MessagesController < ApplicationController

    require 'byebug'

    def create
      
        @message = Message.new(message_params)
        @message.channel_id = params[:channel_id]
        @message.user_id = params[:author_id]
        if @message.save
            @user = User.find_by(id: @message.user_id)
            channel_id = params[:channel_id]
            new_message = {
                message: {
                    id: @message.id,
                    author_id: @message.author_id,
                    body: @message.body,
                    # username: @user.username, tried to pass through controller
                    channel_id: channel_id,
                    action: 'create'
                }
            }
            ChatChannel.speak(params[:channel_id], message.as_json) #message => new_message
            render :show
        else
            render json: messages.errors.full_messages, status: 422
        end
    end


    def message_params 
        params.require(:message).permit(:body, :author_id, :channel_id)
    end
end
