# frozen_string_literal: true

class PwaController < WebsiteController
  protect_from_forgery with: :exception, except: %i[worker]
end
