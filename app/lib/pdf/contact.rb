# frozen_string_literal: true

module Pdf
  module Contact
    def contact(about, host)
      pdf.start_new_page
      add_index(I18n.t('cv.contact'))
      column([0, 0], [10, 23]) do
        h1 { pdf.text I18n.t('cv.contact') }
        links(about, host).each { |link| pdf.formatted_text [link.merge(color: '000000', size: 20)] }
      end
    end

    private

    def links(about, host)
      [
        { link: Rails.application.routes.url_helpers.root_url(host: host), text: host },
        { link: "mailto:#{about.email}", text: about.email },
        { link: 'https://github.com/gmmcal', text: 'github.com/gmmcal' },
        { link: 'https://linkedin.com/in/gmmcal', text: 'linkedin.com/in/gmmcal' },
        { link: 'https://twitter.com/gmmcal', text: 'twitter.com/gmmcal' },
        { link: "tel:#{about.phone_number}", text: about.phone_number }
      ]
    end
  end
end
