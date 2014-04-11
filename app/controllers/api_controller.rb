class ApiController < ApplicationController
    before_filter :restrict_access
    respond_to :json
    private
        def restrict_access
            #authenticate_or_request_with_http_token do |token, options|
            #    @_token = token
            #    ApiKey.exists?(access_token: token)
            #end
            @_api_key = ApiKey.find_by_access_token(params[:access_token])
            head :unauthorized unless @_api_key
        end
    protected
        def current_user
            #only find user if it hasn't already been found,
            #otherwise return cached user id
            @_user ||= @_api_key.user
        end
end