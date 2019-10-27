# frozen_string_literal: true

module Publisher
  def publish(event, payload)
    ActiveSupport::Notifications.publish(event, payload)
  end
end
