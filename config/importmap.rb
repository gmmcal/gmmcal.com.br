# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true

# frontend
pin "application", preload: false
pin "frontend/icons", preload: false
pin "frontend/images", preload: false
pin "frontend/menu", preload: false
pin "frontend/worker", preload: false
pin "behavior/click-handle", preload: false
pin "behavior/menu-handle", preload: false
pin "behavior/scroll-handle", preload: false
# admin
pin "admin/application", preload: false
pin "admin/components/modal", preload: false
pin "admin/components/sortable", preload: false

pin "@fortawesome/fontawesome-svg-core", to: "@fortawesome--fontawesome-svg-core.js", preload: false # @6.7.2
pin "@fortawesome/free-brands-svg-icons", to: "@fortawesome--free-brands-svg-icons.js", preload: false # @6.7.2
pin "@fortawesome/free-regular-svg-icons", to: "@fortawesome--free-regular-svg-icons.js", preload: false # @6.7.2
pin "@fortawesome/free-solid-svg-icons", to: "@fortawesome--free-solid-svg-icons.js", preload: false # @6.7.2
pin "sortablejs", preload: false # @1.15.6
