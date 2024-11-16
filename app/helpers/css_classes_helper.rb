# frozen_string_literal: true

module CssClassesHelper
  def body_class
    [ controller_name, I18n.locale.downcase ].join(" ")
  end

  def menu_classes(menu)
    classes = %w[nav-link]
    classes << active_class if menu_active?(menu)
    classes.join(" ")
  end

  def tab_classes(locale)
    classes = %w[nav-link border-bottom]
    classes << active_class if locale_active?(locale)
    classes.join(" ")
  end

  private

  def active_class
    "active"
  end

  def menu_active?(menu)
    controller_name.to_sym == menu
  end

  def locale_active?(locale)
    current_locale = (params[:locale] || I18n.locale).to_s
    current_locale == locale.to_s
  end
end
