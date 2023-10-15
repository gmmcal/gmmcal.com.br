# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin '@hotwired/turbo-rails', to: 'turbo.min.js', preload: true
# frontend
pin 'application'
pin 'frontend/icons'
pin 'frontend/images'
pin 'frontend/menu'
pin 'frontend/worker'
pin 'behavior/click-handle'
pin 'behavior/menu-handle'
pin 'behavior/scroll-handle'
# admin
pin 'admin/application'
pin 'admin/components/modal'
pin 'admin/components/sortable'

pin '@fortawesome/fontawesome-svg-core', to: 'https://ga.jspm.io/npm:@fortawesome/fontawesome-svg-core@6.4.2/index.mjs'
pin '@fortawesome/free-brands-svg-icons', to: 'https://ga.jspm.io/npm:@fortawesome/free-brands-svg-icons@6.4.2/index.mjs'
pin '@fortawesome/free-regular-svg-icons', to: 'https://ga.jspm.io/npm:@fortawesome/free-regular-svg-icons@6.4.2/index.mjs'
pin '@fortawesome/free-solid-svg-icons', to: 'https://ga.jspm.io/npm:@fortawesome/free-solid-svg-icons@6.4.2/index.mjs'
pin 'sortablejs', to: 'https://ga.jspm.io/npm:sortablejs@1.15.0/modular/sortable.esm.js'
