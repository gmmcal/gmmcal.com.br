# frozen_string_literal: true

class ContentfulController < ApplicationController
  http_basic_authenticate_with name: ENV['CONTENTFUL_USERNAME'], password: ENV['CONTENTFUL_PASSWORD']
  skip_before_action :verify_authenticity_token

  def update
    data = JSON.parse(request.body.read).with_indifferent_access
    klass = Cms::Base.find_resource(data)
    klass.new(data, {}, true).save
  end
end
