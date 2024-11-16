# frozen_string_literal: true

class AboutDecorator < ApplicationDecorator
  delegate_all

  def cv
    h.cv_path(I18n.locale)
  end

  def country
    object.country_name
  end

  def spoken_languages
    h.spoken_languages_list.join(", ")
  end
end
