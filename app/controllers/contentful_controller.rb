# frozen_string_literal: true

class ContentfulController < ApplicationController
  auth_params = {
    name: ENV['CONTENTFUL_USERNAME'],
    password: ENV['CONTENTFUL_PASSWORD']
  }
  http_basic_authenticate_with auth_params
  skip_before_action :verify_authenticity_token

  def update
    data = JSON.parse(request.body.read).with_indifferent_access
    klass = Cms::Base.find_resource(data)
    klass.new(data, {}, true).save
  end
end
