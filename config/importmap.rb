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

pin "@fortawesome/fontawesome-svg-core",
    to: "https://ga.jspm.io/npm:@fortawesome/fontawesome-svg-core@6.5.1/index.mjs", preload: false
pin "@fortawesome/free-brands-svg-icons",
    to: "https://ga.jspm.io/npm:@fortawesome/free-brands-svg-icons@6.5.1/index.mjs", preload: false
pin "@fortawesome/free-regular-svg-icons",
    to: "https://ga.jspm.io/npm:@fortawesome/free-regular-svg-icons@6.5.1/index.mjs", preload: false
pin "@fortawesome/free-solid-svg-icons",
    to: "https://ga.jspm.io/npm:@fortawesome/free-solid-svg-icons@6.5.1/index.mjs", preload: false
pin "sortablejs", to: "https://ga.jspm.io/npm:sortablejs@1.15.2/modular/sortable.esm.js", preload: false
