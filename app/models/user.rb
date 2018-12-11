# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable,
         :rememberable,
         :validatable,
         :trackable

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :default_locale, presence: true
end
