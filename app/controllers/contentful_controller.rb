# frozen_string_literal: true

class ContentfulController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    data = JSON.parse(request.body.read).with_indifferent_access
    resource = Cms::Sync.find(data[:sys][:id])
    resource.save
  end

  def self.auth_params
    {
      name: credentials(:username),
      password: credentials(:password)
    }
  end

  def self.credentials(field)
    credentials = Rails.application.credentials
    return credentials.contentful[field] if credentials.contentful.present?
    ENV["CONTENTFUL_#{field.upcase}"]
  end

  http_basic_authenticate_with auth_params
end
