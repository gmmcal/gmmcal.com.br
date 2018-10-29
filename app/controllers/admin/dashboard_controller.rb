# frozen_string_literal: true

module Admin
  class DashboardController < AdminController
    def index
      authorize :dashboard
    end
  end
end
