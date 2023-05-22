# frozen_string_literal: true

module Admin
  class SessionsController < Devise::SessionsController
    before_action :set_locale

    def create
      super do
        set_locale
        set_flash_message!(:notice, :signed_in)
      end
    end

    private

    def set_locale
      I18n.locale = current_user.default_locale if current_user
      I18n.locale = I18n.default_locale unless current_user
    end

    def after_sign_in_path_for(_resource_or_scope)
      admin_root_path
    end
  end
end
