class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: true

    after_initialize :ensure_session_token

    attr_reader :password
    
    has_one_attached :photo

    has_many :servers,
    foreign_key: :author_id,
    class_name: :Server

    has_many :channels,
    foreign_key: :author_id,
    class_name: :Channel
    

    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bc_digest = BCrypt::Password.new(self.password_digest)
        bc_digest.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(32)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
