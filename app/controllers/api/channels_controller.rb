class Api::ChannelsController < ApplicationController

    before_action :current_user, only: [:create, :index, :destroy]

    def index
        @channels = Server.find(params[:server_id]).channels
        render :index
    end

    def create
        @channel = Channel.create(channel_params)

        if @channel.save
            render :show 
        else
            render json: @channel.errors.full_messages, status: 401
        end
    end

    def show
        @channel = Serv3er.find(params[:server_id]).channels
    end

    def destroy
        @channel = current_user.servers.Channel.find(params[:id])
        if @channel.destroy
            render :index
        else
            render plain: "Can't destroy what's not there"
        end
    end

    def channel_params
        params.require(:channel).permit(:title)
    end
end
