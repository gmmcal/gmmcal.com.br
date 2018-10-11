# frozen_string_literal: true

class RemoveColumnsFromSkills < ActiveRecord::Migration[5.2]
  def up
    change_table :skills, bulk: true do |table|
      table.remove_index :order
      table.remove :hero
      table.remove :order
    end
  end

  def down
    change_table :skills, bulk: true do |table|
      table.column :hero, :string
      table.column :order, :integer, default: 0
      table.index :order
    end
  end
end
