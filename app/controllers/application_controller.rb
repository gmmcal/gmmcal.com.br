class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :set_locale

  def set_locale
    if lang = request.env['HTTP_ACCEPT_LANGUAGE']
      lang = lang[/^[a-z]{2}/]
    end
    unless params[:locale].nil?
      lang = params[:locale]
    end
    lang = :"pt-BR" if lang.downcase == "pt"
    lang = :"pt-BR" if lang.downcase == "br"
    I18n.locale = I18n.available_locales.include?(lang.to_sym) ? lang : I18n.default_locale
  end
end
