# frozen_string_literal: true

module ApplicationHelper
  def body_class
    [controller_name, I18n.locale.downcase].join(' ')
  end
end
