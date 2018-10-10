# frozen_string_literal: true

class CreateEducations < ActiveRecord::Migration[5.2]
  # rubocop:disable Metrics/MethodLength
  def change
    create_table :educations do |table|
      table.string :course
      table.string :institution
      table.text :description
      table.date :start_date
      table.date :end_date
      table.integer :order, default: 0, index: true
      table.string :locale, index: true
      table.string :contentful_id, index: true

      table.timestamps
    end
  end
  # rubocop:enable Metrics/MethodLength
end
