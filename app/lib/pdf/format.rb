# frozen_string_literal: true

module Pdf
  module Format
    def column(start, finish, &)
      pdf.grid(start, finish).bounding_box(&)
    end

    def h1
      pdf.font "Helvetica", size: 45, style: :bold do
        pdf.fill_color "314864"
        yield
      end
    end

    def h2
      pdf.font "Helvetica", size: 35, style: :bold do
        pdf.fill_color "314864"
        yield
      end
    end

    def h3
      pdf.font "Helvetica", size: 25, style: :bold do
        pdf.fill_color "000000"
        yield
      end
    end

    def h5
      pdf.font "Helvetica", size: 18 do
        pdf.fill_color "000000"
        yield
      end
    end

    def small
      pdf.font "Helvetica", size: 10 do
        pdf.fill_color "7e86b9"
        yield
      end
    end

    def body(color: "000000", padding: 10, &)
      pdf.font "Helvetica", size: 13 do
        pdf.fill_color color
        pdf.pad(padding, &)
      end
    end

    def strong_body(&)
      pdf.font("Helvetica", size: 13, style: :bold, &)
    end

    def html(content)
      body do
        pdf.text sanitize(content, tags: allowed_tags), inline_format: true
      end
    end

    def allowed_tags
      %w[strong b i u strikethrough sub sup]
    end
  end
end
