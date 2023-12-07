# frozen_string_literal: true

module Admin
  class ReorderController < AdminController
    include Publisher

    def update
      authorize :reorder

      publish(:"reorder_#{permitted_attributes[:model]}", ids: ids)
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
