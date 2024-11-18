# frozen_string_literal: true

module Admin
  class ReorderController < AdminController
    def update
      authorize :reorder

      ReorderJob.perform_later(ids:, model: permitted_attributes[:model])
    end

    private

    def ids
      permitted_attributes[:ids].map(&:to_i)
    end

    def permitted_attributes
      params.require(:reorder).permit(:model, ids: [])
    end
  end
end
