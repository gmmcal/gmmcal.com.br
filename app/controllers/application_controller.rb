# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    lang = params[:locale] || :en
    lang = lang.downcase
    lang = :'pt-BR' if lang == 'br'
    I18n.locale = if language_is_available?(lang)
                    lang
                  else
                    I18n.default_locale
                  end
  end

  def self.auth_params
    {
      name: credentials(:username),
      password: credentials(:password)
    }
  end

  def self.credentials(field)
    credentials = Rails.application.credentials
    return credentials.contentful[field] if credentials.contentful.present?
    ENV["CONTENTFUL_#{field.upcase}"]
  end

  private

  def language_is_available?(language)
    I18n.available_locales.include?(language.to_sym)
  end
end
