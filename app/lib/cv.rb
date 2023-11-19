# frozen_string_literal: true

class Cv
  attr_reader :pdf

  delegate :experiences, to: :pdf
  delegate :skills, to: :pdf
  delegate :educations, to: :pdf
  delegate :contact, to: :pdf
  delegate :render, to: :pdf

  def initialize(keywords, options)
    @pdf = PrawnPdf.new(keywords, options)
  end

  def about(about, host)
    pdf.footer(about, host)
    pdf.about(about)
  end
end
