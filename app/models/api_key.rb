class ApiKey < ActiveRecord::Base
    #note that this is 'skipped' by .new but 'triggered' by .save etc
    #for more go to:
    #http://guides.rubyonrails.org/active_record_callbacks.html#creating-an-object
    before_create :generate_access_token
    belongs_to :user
    private
        def generate_access_token
            begin
                self.access_token = SecureRandom.hex
            end while self.class.exists?(access_token: access_token)
        end
end
