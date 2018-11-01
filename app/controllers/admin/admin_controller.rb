# frozen_string_literal: true

module Admin
  class AdminController < ApplicationController
    include Pundit
    layout 'admin'
    after_action :verify_authorized

    def current_user
      Object.new
    end

    protected

    def locale
      params[:locale] || I18n.locale
    end

    def model
      controller_name.classify.constantize
    end
  end
end
