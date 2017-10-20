# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    lang = :en
    lang = params[:locale] unless params[:locale].nil?
    lang = lang.downcase
    lang = :'pt-BR' if lang == 'br'
    I18n.locale = if language_is_available?(lang)
                    lang
                  else
                    I18n.default_locale
                  end
  end

  private

  def language_is_available?(language)
    I18n.available_locales.include?(language.to_sym)
  end
end
