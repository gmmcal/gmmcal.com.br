# frozen_string_literal: true

module Pdf
  module Footer
    def footer(about, host)
      pdf.repeat(:all) do
        x_position = pdf.grid.rows - 1
        host_column(x_position, host)
        email_column(x_position, about)
        phone_column(x_position, about)
      end
    end

    private

    def footer_style
      pdf.font "Helvetica", size: 10, style: :italic do
        pdf.fill_color "7e86b9"
        yield
      end
    end

    def host_column(x_position, host)
      column([ x_position, 0 ], [ x_position, 7 ]) do
        footer_style { pdf.text host, valign: :bottom }
      end
    end

    def email_column(x_position, about)
      column([ x_position, 8 ], [ x_position, 15 ]) do
        footer_style { pdf.text about.email, align: :center, valign: :bottom }
      end
    end

    def phone_column(x_position, about)
      column([ x_position, 16 ], [ x_position, 23 ]) do
        footer_style { pdf.text about.phone_number, align: :right, valign: :bottom }
      end
    end
  end
end
