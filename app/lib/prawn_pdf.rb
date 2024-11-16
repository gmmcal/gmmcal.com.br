# frozen_string_literal: true

class PrawnPdf
  include ActionView::Helpers
  include Pdf::Format
  include Pdf::About
  include Pdf::Experiences
  include Pdf::Educations
  include Pdf::Contact
  include Pdf::Footer
  attr_reader :pdf

  delegate :render, to: :pdf
  delegate :page_number, to: :pdf
  delegate :outline, to: :pdf
  delegate :section, to: :pdf

  def initialize(keywords, options)
    @pdf = Prawn::Document.new(options.merge(metadata(keywords)))
    pdf.font "Helvetica", size: 13
    pdf.define_grid(columns: 24, rows: 12, gutter: 10)
    pdf.default_leading 5
  end

  private

  def add_index(title)
    pdf.outline.define do
      section(title, destination: page_number)
    end
  end

  def add_index_subsection(parent, title)
    pdf.outline.add_subsection_to(parent) do
      pdf.outline.page title: title, destination: page_number
    end
  end

  def metadata(keywords)
    {
      info: metadata_info(keywords),
      margin: 30
    }
  end

  def metadata_info(keywords)
    {
      Title: I18n.t("frontend.helpers.title"),
      Author: I18n.t("frontend.template.name"),
      Subject: I18n.t("cv.subject"),
      Keywords: keywords.join(" "),
      Creator: I18n.t("frontend.template.name"),
      Producer: "Prawn",
      CreationDate: Time.zone.now
    }
  end
end
