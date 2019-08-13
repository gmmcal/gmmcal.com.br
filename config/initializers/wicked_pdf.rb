# frozen_string_literal: true

# WickedPDF Global Configuration
#
# Use this to set up shared configuration options for your entire application.
# Any of the configuration options shown here can also be applied to single
# models by passing arguments to the `render :pdf` call.
#
# To learn more, check out the README:
#
# https://github.com/mileszs/wicked_pdf/blob/master/README.md

WickedPdf.config = {
  # Layout file to be used for all PDFs
  layout: 'download.html',
  orientation: 'Landscape',
  page_size: 'A4',
  dpi: '300',
  encoding: 'utf-8',
  image_quality: 100,
  no_pdf_compression: true,
  default_header: false,
  grayscale: false,
  lowquality: false,
  enable_plugins: true,
  disable_internal_links: false,
  disable_external_links: false,
  print_media_type: true,
  no_background: true,
  margin: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  },
  footer: {
    html: {
      template: 'download/footer',
      layout: false
    }
  }
}
