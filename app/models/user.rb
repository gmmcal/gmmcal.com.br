# frozen_string_literal: true

class User < ApplicationRecord
  include Locatable

  devise :database_authenticatable,
         :rememberable,
         :validatable,
         :trackable

  validates :first_name, presence: true
  validates :last_name, presence: true
end
