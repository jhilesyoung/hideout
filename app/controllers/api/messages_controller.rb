class MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        @message.channel_id = params[:channel_id]
        @message.user_id = params[:author_id]
        if @message.save
            channel_id = params[:channel_id]
            new_message = {
                message: {
                    id: @message.id,
                    author_id: @message.author_id,
                    body: @message.body,
                    channelId: channel_id,
                    action: 'create'
                }
            }
            ChatChannel.speak(params[:channel_id], message.as_json)
            render :show
        else
            render json: messages.errors.full_messages, status: 422
        end
    end


    def message_params 
        params.require(:message).permit(:body, :author_id, :channel_id)
    end
end
