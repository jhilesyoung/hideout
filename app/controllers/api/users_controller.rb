class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end
    
    def create
        @user = User.create(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        current_user.photo.attach(params[:photo])
        if current_user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :photo)
    end

end