class DreamsController < ApplicationController

    def index 
        dreams = Dream.all 
        render json: dreams
    end 

    def create
        dream = Dream.create(dream_params) 
        render json: dream
    end 

    def destroy 
        dream = Dream.find_by(dream_params[:id])
        dream.destroy 
    end 

    private 

    def dream_params
        params.permit(:image, :description, :date_time)
    end
    
end
