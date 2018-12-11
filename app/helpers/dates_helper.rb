# frozen_string_literal: true

module DatesHelper
  def end_date(date)
    return t(:current, scope: %i[frontend template]) unless date

    l date
  end
end
