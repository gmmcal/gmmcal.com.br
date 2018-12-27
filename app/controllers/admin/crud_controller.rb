# frozen_string_literal: true

module Admin
  class CrudController < AdminController
    before_action :set_model, only: %i[edit update destroy]

    private

    def instance_variable_name
      model.model_name.singular
    end

    def instance_variable_value
      model.find(params[:id])
    end

    def set_model
      instance_variable_set(
        "@#{instance_variable_name}",
        instance_variable_value
      )
    end
  end
end
