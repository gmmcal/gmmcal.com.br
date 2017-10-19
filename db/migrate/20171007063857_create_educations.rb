# frozen_string_literal: true

class CreateEducations < ActiveRecord::Migration[5.1]
  # rubocop:disable Metrics/MethodLength
  def change
    create_table :educations do |t|
      t.string :course
      t.string :institution
      t.text :description
      t.date :start_date
      t.date :end_date
      t.integer :order, default: 0, index: true
      t.string :locale, index: true
      t.string :contentful_id, index: true

      t.timestamps
    end
  end
end
