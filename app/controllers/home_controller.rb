class HomeController < ApplicationController
  def index
    @about = About.with_locale(I18n.locale)
    @educations = Education.with_locale(I18n.locale)
    @portfolios = Portfolio.with_locale(I18n.locale)
    @skills = Skill.with_locale(I18n.locale)
    @work_experiences = WorkExperience.with_locale(I18n.locale)
  end
end
