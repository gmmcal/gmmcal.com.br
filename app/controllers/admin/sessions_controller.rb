# frozen_string_literal: true

module Admin
  class SessionsController < ApplicationController
    include Authentication
    allow_unauthenticated_access only: %i[new create]
    rate_limit to: 10, within: 3.minutes, only: :create, with: lambda {
      redirect_to new_session_url, alert: t("admin.sessions.limited")
    }
    before_action :set_locale
    layout "authentication"

    def new; end

    def create
      if (user = User.authenticate_by(params.require(:user).permit(:email_address, :password)))
        start_new_session_for user
        set_locale
        redirect_to after_authentication_url, notice: t("admin.sessions.signed_in")
      else
        redirect_to new_admin_session_path, alert: t("admin.sessions.invalid")
      end
    end

    def destroy
      terminate_session
      redirect_to root_path
    end

    private

    def set_locale
      I18n.locale = Current.user.default_locale if authenticated?
      I18n.locale = I18n.default_locale unless authenticated?
    end
  end
end
