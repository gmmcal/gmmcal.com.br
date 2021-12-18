# frozen_string_literal: true

module Publisher
  def publish(event, payload)
    ActiveSupport::Notifications.instrument(event.to_s, payload)
  end
end
