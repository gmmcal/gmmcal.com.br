# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    current_locale = I18n.locale
    @about = About.with_locale(current_locale)
    @educations = Education.ordered.with_locale(current_locale)
    @portfolios = Portfolio.ordered.with_locale(current_locale)
    @skills = Skill.ordered.with_locale(current_locale)
    @work_experiences = WorkExperience.ordered.with_locale(current_locale)
  end
end
