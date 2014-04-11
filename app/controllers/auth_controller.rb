class AuthController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json
    def authenticate
        @params = auth_params
        @user = User.authenticate(@params[:email],@params[:password])
        if @user
            key = @user.api_key
            if key
                key.destroy
            end
            key = ApiKey.new 
            @user.api_key = key
            render json: key
        else
            head :unauthorized
        end
    end
    private
        def auth_params
            params.require(:user).permit(:email,:password)
        end
end