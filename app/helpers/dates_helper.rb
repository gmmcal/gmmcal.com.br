# frozen_string_literal: true

module DatesHelper
  def end_date(date)
    return t("frontend.template.current") unless date

    l date
  end
end
