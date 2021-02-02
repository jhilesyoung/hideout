class MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render json: messages.errors.full_messages, status: 422
        end
    end


    def message_params 
        params.require(:message).permt(:body, :author_id, :channel_id)
    end
end
