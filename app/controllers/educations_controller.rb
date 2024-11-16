# frozen_string_literal: true

class EducationsController < WebsiteController
  def index
    fetch_from_cache("educations")
  end
end
