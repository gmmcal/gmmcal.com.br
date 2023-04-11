# frozen_string_literal: true

class WorkExperiencesController < WebsiteController
  def index
    fetch_from_cache('work_experiences')
  end
end
