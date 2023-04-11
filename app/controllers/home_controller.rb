# frozen_string_literal: true

class HomeController < WebsiteController
  before_action :set_flag_links
  before_action :set_menu_links

  # def about
  #   fetch_from_cache('about')
  # end

  # def educations
  #   fetch_from_cache('educations')
  # end

  # def skills
  #   fetch_from_cache('skills')
  # end

  # def work_experiences
  #   fetch_from_cache('work_experiences')
  # end
end
