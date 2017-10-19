# frozen_string_literal: true

class About < ApplicationRecord
  validates :job_title, presence: true
  validates :description, presence: true
  validates :cv, presence: true
  validates :locale, presence: true
  validates :contentful_id, presence: true
end
