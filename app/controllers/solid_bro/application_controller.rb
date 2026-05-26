# frozen_string_literal: true

module SolidBro
  class ApplicationController < Admin::AdminController
    include Pagy::Method
    layout "solid_bro/application"
    before_action :authorize_solid_bro

    def request_authentication
      session[:return_to_after_authenticating] = request.url
      redirect_to "/admin"
    end

    def authorize_solid_bro
      authorize :solid_bro, :access?
    end
  end
end
