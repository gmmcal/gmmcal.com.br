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

  def respond_to_missing?(name)
    return true if payload.keys.include?(name)

    # :nocov:
    false
    # :nocov:
  end

  def method_missing(name, *args)
    return payload[name] if respond_to_missing?(name)

    # :nocov:
    super
    # :nocov:
  end

  def payload
    @payload ||= {}
  end
end
