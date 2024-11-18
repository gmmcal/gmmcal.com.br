# frozen_string_literal: true

class ReorderJob < ApplicationJob
  queue_as :default

  def perform(ids:, model:)
    objects = model.to_s.classify.constantize.where(id: ids)

    objects.each do |object|
      index = ids.index(object.id)
      object.update(order: index)
      CacheCleanupJob.perform_later(id: object.id, model:)
    end
  end
end
