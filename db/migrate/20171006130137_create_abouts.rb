# frozen_string_literal: true

class CreateAbouts < ActiveRecord::Migration[5.1]
  # rubocop:disable Metrics/MethodLength
  def change
    create_table :abouts do |t|
      t.string :job_title
      t.text :description
      t.string :cv
      t.string :city
      t.string :country
      t.string :phone_number
      t.string :email
      t.string :locale, index: true
      t.string :contentful_id, index: true

      t.timestamps
    end
  end
  # rubocop:enable Metrics/MethodLength
end
