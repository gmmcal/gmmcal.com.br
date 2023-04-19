# frozen_string_literal: true

module AdminHelper
  def active_locale
    (params[:locale] || I18n.locale).downcase
  end
end
