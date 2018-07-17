# frozen_string_literal: true

class HomeController < ApplicationController
  caches_action :index

  def index
    current_locale = I18n.locale
    @about = About.with_locale(current_locale).first_or_initialize
    @educations = Education.ordered.with_locale(current_locale)
    @skills = Skill.ordered.with_locale(current_locale)
    @work_experiences = WorkExperience.ordered.with_locale(current_locale)
    set_gon_data
  end

  private

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
    links = %i[home about skills experience education contact]
    links.map do |page|
      {
        link: "##{page}",
        label: page.to_s
      }
    end
  end
end
