# frozen_string_literal: true

class SkillsController < WebsiteController
  def index
    fetch_from_cache('skills')
  end
end
