# frozen_string_literal: true

module ApplicationHelper
  def ldate(dt, hash = {})
    dt ? l(dt, hash) : t(:current, scope: [:template])
  end
end
