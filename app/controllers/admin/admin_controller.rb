# frozen_string_literal: true

module Admin
  class AdminController < ApplicationController
    include Authentication
    include Pundit::Authorization
    layout "admin"
    before_action :set_default_locale
    after_action :verify_authorized

    protected

    def locale
      params[:locale] || I18n.locale
    end

    def model
      controller_name.classify.constantize
    end

    def human_model
      model.model_name.human
    end

    private

    def set_default_locale
      I18n.locale = current_user.default_locale
    end

    def current_user
      Current.user
    end
  end
end
