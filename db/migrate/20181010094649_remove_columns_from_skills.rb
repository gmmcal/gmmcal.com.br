# frozen_string_literal: true

class RemoveColumnsFromSkills < ActiveRecord::Migration[5.2]
  def up
    change_table :skills, bulk: true do |t|
      t.remove_index :order
      t.remove :hero
      t.remove :order
    end
  end

  def down
    change_table :skills, bulk: true do |t|
      t.column :hero, :string
      t.column :order, :integer, default: 0
      t.index :order
    end
  end
end
