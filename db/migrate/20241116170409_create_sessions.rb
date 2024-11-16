# frozen_string_literal: true

class CreateSessions < ActiveRecord::Migration[8.0]
  def change
    create_table :sessions do |table|
      table.references :user, null: false, foreign_key: true
      table.string :ip_address
      table.string :user_agent

      table.timestamps
    end
  end
end
