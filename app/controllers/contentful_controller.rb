# frozen_string_literal: true

class ContentfulController < ApplicationController
  http_basic_authenticate_with name: ENV['CONTENTFUL_USERNAME'], password: ENV['CONTENTFUL_PASSWORD']

  def update
    klass = Cms::Base.find_resource(params[:contentful])
    klass.new(params[:contentful], {}, true).save
  end
end
