# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |table|
      ## Database authenticatable
      table.string :first_name
      table.string :last_name
      table.string :email,              null: false, default: ''
      table.string :encrypted_password, null: false, default: ''
      table.string :default_locale

      ## Rememberable
      table.datetime :remember_created_at

      ## Trackable
      table.integer  :sign_in_count, default: 0, null: false
      table.datetime :current_sign_in_at
      table.datetime :last_sign_in_at
      table.inet     :current_sign_in_ip
      table.inet     :last_sign_in_ip

      table.timestamps null: false
    end

    add_index :users, :email, unique: true
  end
end
