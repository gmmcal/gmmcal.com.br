# frozen_string_literal: true

class DownloadController < ApplicationController
  def cv
    fetch_from_cache('educations')
    fetch_from_cache('skills')
    fetch_from_cache('work_experiences')

    render pdf: "curriculum-gustavo-cunha-#{I18n.locale.downcase}",
           disposition: params[:disposition],
           show_as_html: params.key?('debug')
  end
end
