
class User < ActiveRecord::Base
    EMAIL_REGEX = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
    
    validates :password, presence: true
    validates :email, presence: true, uniqueness: true, format: EMAIL_REGEX
    
    has_many :exercises
    has_many :workouts
    has_many :stats
    
    has_one :api_key
    
    before_save :hash_password, if: :changed_password?
    attr_accessor :new_password
    
    def self.authenticate(email, password)
        if user = self.find_by_email(email)
            if Digest::SHA1.hexdigest(password) == user.password
                return user
            end
        end
        nil
    end
    
    private
        def changed_password?
            !@new_password.blank?
        end
        def hash_password
            self.password = Digest::SHA1.hexdigest(@new_password)
        end
    
end
