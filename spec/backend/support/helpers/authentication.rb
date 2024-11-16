# frozen_string_literal: true

module Helpers
  module Authentication
    def sign_in(user)
      session = create(:session, user: user)
      cookies.signed[:session_id] = session.id
    end
  end
end
