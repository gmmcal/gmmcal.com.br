class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    lang = :en
    unless params[:locale].nil?
      lang = params[:locale]
    end
    lang = :"pt-BR" if lang.downcase == "br"
    I18n.locale = I18n.available_locales.include?(lang.to_sym) ? lang : I18n.default_locale
  end
end
