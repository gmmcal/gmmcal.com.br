# frozen_string_literal: true

class HomeController < WebsiteController
  before_action :set_flag_links
  before_action :set_menu_links

  private

  def set_data
    super
    gon.push(educations: fetch_from_cache('educations'))
    gon.push(skills: fetch_from_cache('skills'))
    gon.push(experiences: fetch_from_cache('work_experiences'))
  end
end
