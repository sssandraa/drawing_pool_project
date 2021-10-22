class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, include: :dream 
    end 

    def show 
        user = User.find(params[:id])
        render json:user 
    end 

    def create 
        user = User.create(user_params)
        render json: user 
    end 

    def login
        user = User.find_by(name:user_params[:name])
        if(user && user.authenticate(user_params[:password]))
            session[:user_id] = user.id
            render json: {user: user}
        else 
            render json: {error: ["name or password not found"]}, status: :unauthorized
        end    
    end 

    # def logout 

    # end 

    def profile
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user 
        else 
            render json: {error: ["login please"]}
        end
    end

    private 

    def user_params
        params.permit(:name, :password)
    end 

end
