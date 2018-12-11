# frozen_string_literal: true

class UserPolicy < ApplicationPolicy
  def permitted_attributes
    %i[first_name last_name email password password_confirmation default_locale]
  end
end
