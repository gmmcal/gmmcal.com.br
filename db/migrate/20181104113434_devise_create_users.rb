# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[5.2]
  # rubocop:disable Metrics/AbcSize
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :first_name
      t.string :last_name
      t.string :email,              null: false, default: ''
      t.string :encrypted_password, null: false, default: ''
      t.string :locale

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet     :current_sign_in_ip
      t.inet     :last_sign_in_ip

      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
  end
  # rubocop:enable Metrics/AbcSize
end
