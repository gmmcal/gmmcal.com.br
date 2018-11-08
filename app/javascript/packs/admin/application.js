import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks'
import DashboardChart from './chart'

Rails.start()
Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
  const el = document.querySelector('.dashboard')

  if (el !== null) {
    const about = new DashboardChart({
      id: 'about',
      data: gon.about,
      type: 'doughnut'
    })
    const educations = new DashboardChart({
      id: 'educations',
      data: gon.educations,
      type: 'doughnut'
    })
    const skills = new DashboardChart({
      id: 'skills',
      data: gon.skills,
      type: 'doughnut'
    })
    const work_experiences = new DashboardChart({
      id: 'work_experiences',
      data: gon.work_experiences,
      type: 'doughnut'
    })
    about.render()
    educations.render()
    skills.render()
    work_experiences.render()
  }
})
