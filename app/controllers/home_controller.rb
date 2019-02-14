# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :set_locale

  def index
    @about = fetch_from_cache('about')
    @educations = fetch_from_cache('education')
    @skills = fetch_from_cache('skill')
    @work_experiences = fetch_from_cache('work_experience')
    set_gon_data
  end

  private

  def fetch_from_cache(model)
    Rails.cache.fetch("#{I18n.locale}/#{model}") do
      data = model.classify.constantize.find_for_locale(I18n.locale)
      if data.is_a?(ActiveRecord::Relation)
        data.to_a
      else
        data
      end
    end
  end

  def set_gon_data
    gon.flag_links = flag_links
    gon.menu_links = menu_links
    gon.about = @about
    gon.educations = @educations
    gon.skills = @skills
    gon.experiences = @work_experiences
  end

  def flag_links
    flags = %i[pt-BR en]
    flags.delete(I18n.locale)
    flags.map do |flag|
      {
        link: home_path(flag),
        label: flag,
        css_class: ['flag', flag.downcase].join(' ')
      }
    end
  end

  def menu_links
    links = %i[home about experience skills education contact]
    links.map do |page|
      {
        link: "##{page}",
        label: page.to_s
      }
    end
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
