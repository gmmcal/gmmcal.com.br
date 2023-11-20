# frozen_string_literal: true

class DownloadController < WebsiteController
  def cv
    send_data(
      pdf.render,
      filename: "curriculum-gustavo-cunha-#{I18n.locale.downcase}",
      type: 'application/pdf',
      disposition: params[:disposition]
    )
  end

  private

  def pdf
    file = Cv.new(@skills.cv, page_size: 'A4', page_layout: :landscape)
    file.about(@about, request.host)
    file.experiences(@work_experiences)
    file.educations(@educations)
    file.contact(@about, request.host)
    file
  end

  def set_data
    fetch_from_cache('about')
    fetch_from_cache('educations')
    fetch_from_cache('skills')
    fetch_from_cache('work_experiences')
  end
end
