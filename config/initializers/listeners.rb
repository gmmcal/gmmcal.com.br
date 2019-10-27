# frozen_string_literal: true

Rails.application.config.after_initialize do
  AboutListener.new
  EducationListener.new
  ExperienceListener.new
  ReorderListener.new
  SkillListener.new
end
