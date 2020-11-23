class Api::ServersController < ApplicationController
    
    before_action :current_user, :ensure_logged_in?, only: [:create, :show, :update, :destroy]
    
    def index
        @servers = Server.all
        render :index
    end

    def create
        @server = current_user.servers.create(server_params)

        if @server.save
            render :show
        else
            render @server.errors.full_messages, status: 401
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server && @server.update(server_params)
            render :show 
        elsif !@server 
            render json: ['Could not find server'], status: 400
        else
            render json: @server.errors.full_messages, status: 401
        end
    end
    
    def show
        @server = Server.find(params[:id])
        render :show
    end

    def destroy
        @server = Server.find(params[:id])
        if @server.destroy
            render :index
        else
            render plain: "You are trying to destroy an invisible server"
        end
    end


    private

    def server_params
        params.require(:server).permit(:title)
    end

end
