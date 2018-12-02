# frozen_string_literal: true

module Admin
  class ReorderController < AdminController
    before_action :permitted_attributes

    def update
      authorize :reorder

      if valid_model?(params[:model]) && set_order
        head :ok
      else
        head :precondition_failed
      end
    end

    private

    def set_order
      model = params[:model].classify.constantize
      params[:ids].each_with_index do |id, index|
        model.where(id: id).update(order: index)
      end
    end

    def permitted_attributes
      self.params = params.require(:reorder).permit(:model, ids: [])
    end

    def valid_model?(model)
      %i[education work_experience].include?(model.to_sym)
    end
  end
end
