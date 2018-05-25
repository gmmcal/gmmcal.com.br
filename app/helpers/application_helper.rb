# frozen_string_literal: true

module ApplicationHelper
  def ldate(date, hash = {})
    date ? l(date, hash) : t(:current, scope: [:template])
  end
end
