# frozen_string_literal: true

class CreateWorkExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :work_experiences do |table|
      table.string :company_name
      table.string :position
      table.string :city
      table.string :country
      table.text :description
      table.date :start_date
      table.date :end_date
      table.integer :order, default: 0, index: true
      table.string :locale, index: true
      table.string :contentful_id, index: true

      table.timestamps
    end
  end
end
