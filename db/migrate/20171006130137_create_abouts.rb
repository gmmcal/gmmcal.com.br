# frozen_string_literal: true

class CreateAbouts < ActiveRecord::Migration[5.2]
  def change
    create_table :abouts do |table|
      table.string :job_title
      table.text :description
      table.string :cv
      table.string :city
      table.string :country
      table.string :phone_number
      table.string :email
      table.string :locale, index: true
      table.string :contentful_id, index: true

      table.timestamps
    end
  end
end
