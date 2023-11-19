# frozen_string_literal: true

module Pdf
  module Educations
    def educations(educations)
      pdf.start_new_page
      add_index(I18n.t('cv.education'))
      education_title
      education_content(educations)
    end

    private

    def education_title
      column([0, 0], [0, 23]) do
        h2 { pdf.text I18n.t('cv.education') }
      end
    end

    def education_content(educations)
      educations.cv.each_with_index do |education, index|
        start_y = index * 12
        end_y = ((index + 1) * 12) - 1
        column([1, start_y], [10, end_y]) do
          pdf.pad(15) do
            education_data(education)
          end
        end
      end
    end

    def education_data(education)
      education_index(education)
      h3 { pdf.text education.course }
      strong_body { pdf.text "#{education.institution} - #{education.end_date}" }
      html(education.description)
    end

    def education_index(education)
      add_index_subsection(I18n.t('cv.education'), education.course)
      add_index_subsection(education.course, "#{education.institution} (#{education.end_date})")
    end
  end
end
