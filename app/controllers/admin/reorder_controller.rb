# frozen_string_literal: true

module Admin
  class ReorderController < AdminController
    before_action :permitted_attributes

    def update
      authorize :reorder

      begin
        params[:ids].each_with_index do |id, index|
          model.where(id: id).update(order: index)
        end
        head :ok
      rescue StandardError
        head :precondition_failed
      end
    end

    protected

    def model
      return Education if params[:model] == 'education'

      return WorkExperience if params[:model] == 'work_experience'

      raise StandardError
    end

    private

    def permitted_attributes
      self.params = params.require(:reorder).permit(:model, ids: [])
    end
  end
end
