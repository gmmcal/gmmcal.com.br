# frozen_string_literal: true

module Admin
  class AdminController < ApplicationController
    include Pundit
    layout 'admin'
    before_action :authenticate_user!
    before_action :set_locale
    after_action :verify_authorized

    protected

    def model
      controller_name.classify.constantize
    end

    private

    def set_locale
      I18n.locale = current_user.locale
    end
  end
end
