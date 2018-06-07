# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :set_gon_data

  def index
    current_locale = I18n.locale
    @about = About.with_locale(current_locale)
    @educations = Education.ordered.with_locale(current_locale)
    @skills = Skill.ordered.with_locale(current_locale)
    @work_experiences = WorkExperience.ordered.with_locale(current_locale)
  end

  private

  def set_gon_data
    gon.flag_links = flag_links
    gon.menu_links = menu_links
  end

  def flag_links
    [:br, :en].map do |flag|
      {
        link: home_path(flag),
        label: flag,
        css_class: ['flag', flag].join(' ')
      }
    end
  end

  def menu_links
    [:home, :about, :skills, :experience, :education, :contact, :social].map do |page|
      {
        link: "##{page}",
        label: page.to_s,
      }
    end
  end
end
