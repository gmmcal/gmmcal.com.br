# frozen_string_literal: true

class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |table|
      table.string :name
      table.string :hero
      table.decimal :value, precision: 5, scale: 2, default: 0
      table.integer :order, default: 0, index: true
      table.string :locale, index: true
      table.string :contentful_id, index: true

      table.timestamps
    end
  end
end
