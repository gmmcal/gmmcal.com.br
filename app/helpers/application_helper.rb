# frozen_string_literal: true

module ApplicationHelper
  def locale_to_language(locale)
    locale.to_s
  end

  def markdown(text)
    return '' if text.nil?

    sanitize(Kramdown::Document.new(text).to_html.squish)
  end
end
