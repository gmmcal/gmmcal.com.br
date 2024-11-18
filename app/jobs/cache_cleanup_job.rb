# frozen_string_literal: true

class CacheCleanupJob < ApplicationJob
  queue_as :default

  def perform(id:, model:)
    item = model.to_s.classify.constantize.find(id)
    Rails.logger.debug item
    Rails.cache.delete("#{item.locale}/#{model}")
  end
end
