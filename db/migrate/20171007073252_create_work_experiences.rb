# frozen_string_literal: true

class CreateWorkExperiences < ActiveRecord::Migration[5.1]
  # rubocop:disable Metrics/MethodLength
  def change
    create_table :work_experiences do |t|
      t.string :company_name
      t.string :position
      t.string :city
      t.string :country
      t.text :description
      t.date :start_date
      t.date :end_date
      t.integer :order, default: 0, index: true
      t.string :locale, index: true
      t.string :contentful_id, index: true

      t.timestamps
    end
  end
  # rubocop:enable Metrics/MethodLength
end
