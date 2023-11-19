# frozen_string_literal: true

module Pdf
  module About
    def about(about)
      add_index(I18n.t('frontend.template.name'))
      column([3, 16], [10, 23]) do
        image
      end
      column([3, 0], [10, 15]) do
        about_content(about)
      end
    end

    private

    def image
      pdf.image 'app/assets/images/frontend/gmmcal.png',
                vposition: :bottom, position: :center,
                fit: [pdf.bounds.width - 10, pdf.bounds.height - 10]
    end

    def about_content(about)
      about_title
      text(about)
    end

    def about_title
      h1 { pdf.text I18n.t('frontend.template.name') }
      pdf.pad(5) do
        pdf.stroke_horizontal_rule
      end
    end

    def text(about)
      pdf.pad(5) do
        h5 { pdf.text about.description }
      end
      pdf.pad(5) do
        h5 { pdf.text I18n.t('cv.spoken_languages', languages: about.spoken_languages) }
      end
    end
  end
end
