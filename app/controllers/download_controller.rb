# frozen_string_literal: true

class DownloadController < WebsiteController
  def cv
    render pdf: "curriculum-gustavo-cunha-#{I18n.locale.downcase}",
           disposition: params[:disposition],
           show_as_html: params.key?('debug')
  end

  private

  def set_data
    fetch_from_cache('about')
    fetch_from_cache('educations')
    fetch_from_cache('skills')
    fetch_from_cache('work_experiences')
  end
end
