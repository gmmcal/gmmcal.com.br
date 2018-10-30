# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @about = about
    @educations = educations
    @skills = skills
    @work_experiences = work_experiences
    set_gon_data
  end

  private

  def about
    Rails.cache.fetch("#{I18n.locale}/about", expires_in: 12.hours) do
      About.find_for_locale(I18n.locale)
    end
  end

  def educations
    Rails.cache.fetch("#{I18n.locale}/educations", expires_in: 12.hours) do
      Education.ordered.with_locale(I18n.locale).to_a
    end
  end

  def skills
    Rails.cache.fetch("#{I18n.locale}/skills", expires_in: 12.hours) do
      Skill.random.with_locale(I18n.locale).to_a
    end
  end

  def work_experiences
    Rails.cache.fetch("#{I18n.locale}/experiences", expires_in: 12.hours) do
      WorkExperience.ordered.with_locale(I18n.locale).to_a
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

  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
