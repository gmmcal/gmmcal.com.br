# frozen_string_literal: true

module Pdf
  module Experiences
    def experiences(experiences, host)
      pdf.start_new_page
      add_index(I18n.t("cv.experience"))
      experience_title
      experience_content(experiences, host)
    end

    private

    def experience_title
      h2 { pdf.text I18n.t("cv.experience") }
    end

    def experience_content(experiences, host)
      pdf.column_box([ 0, pdf.cursor ], columns: 2, width: pdf.bounds.width, height: 440) do
        experiences.cv.each do |experience|
          pdf.pad_bottom(50) do
            experience_data(experience)
            experience_footer(host)
            spacer
          end
        end
      end
    end

    def experience_data(experience)
      add_index_subsection(I18n.t("cv.experience"), experience_index_title(experience))
      h3 { pdf.text experience.company_name }
      strong_body { pdf.text "(#{experience.start_date} - #{experience.end_date})" }
      html(experience.description)
    end

    def experience_index_title(experience)
      "#{experience.company_name} (#{experience.start_date} - #{experience.end_date})"
    end

    def experience_footer(host)
      small { pdf.text I18n.t("cv.previous_experiences", link: host) }
    end

    def spacer
      pdf.pad(5) do
        pdf.transparent(0.2) { pdf.stroke_horizontal_rule }
      end
    end
  end
end
