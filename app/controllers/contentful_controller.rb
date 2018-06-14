# frozen_string_literal: true

class ContentfulController < ApplicationController
  http_basic_authenticate_with auth_params
  skip_before_action :verify_authenticity_token

  def update
    data = JSON.parse(request.body.read).with_indifferent_access
    resource = Cms::Sync.find(data[:sys][:id])
    resource.save
  end
end
