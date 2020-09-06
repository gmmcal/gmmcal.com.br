# frozen_string_literal: true

class BaseListener
  class << self
    def cache
      Rails.cache
    end
  end

  def initialize
    event_methods = self.class.instance_methods(false)

    event_methods.each do |method|
      subscribe(method)
    end
  end

  private

  def subscribe(event)
    ActiveSupport::Notifications.subscribe(event) do |name, data|
      payload.merge!(data)
      send(name)
    end
  end

  def respond_to_missing?(name, *args)
    return true if payload.keys.include?(name)

    super
  end

  def method_missing(name, *args)
    return payload[name] if respond_to_missing?(name, args)

    super
  end

  def payload
    @payload ||= {}
  end
end
