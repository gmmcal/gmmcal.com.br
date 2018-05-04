# frozen_string_literal: true

class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :hero
      t.decimal :value, precision: 5, scale: 2, default: 0
      t.integer :order, default: 0, index: true
      t.string :locale, index: true
      t.string :contentful_id, index: true

      t.timestamps
    end
  end
end
