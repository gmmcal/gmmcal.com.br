# frozen_string_literal: true

module Admin
  class DashboardController < AdminController
    def index
      authorize :dashboard

      about = About.group(:locale).count
      educations = Education.group(:locale).count
      skills = Skill.group(:locale).count
      work_experiences = WorkExperience.group(:locale).count
      gon.about = data_to_chart(about)
      gon.educations = data_to_chart(educations)
      gon.skills = data_to_chart(skills)
      gon.work_experiences = data_to_chart(work_experiences)
    end

    private

    def data_to_chart(data)
      {
        keys: data.keys,
        values: data.values
      }
    end
  end
end
