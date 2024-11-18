# frozen_string_literal: true

module Admin
  class CrudController < AdminController
    before_action :set_model, only: %i[edit update destroy]

    def edit
      raise NotImplementedError
    end

    def update
      raise NotImplementedError
    end

    def destroy
      raise NotImplementedError
    end

    private

    def instance_variable_name
      model.model_name.singular
    end

    def instance_variable_value
      model.find(params[:id])
    end

    def set_model
      instance_variable_set(
        :"@#{instance_variable_name}",
        instance_variable_value
      )
    end

    def render_success(message)
      respond_to do |format|
        format.html do
          redirect_to redirect_path,
                      notice: t(message, model: human_model)
        end
        format.turbo_stream
      end
    end

    def render_failure(template)
      respond_to do |format|
        format.html do
          render template
        end
        format.turbo_stream
      end
    end
  end
end
