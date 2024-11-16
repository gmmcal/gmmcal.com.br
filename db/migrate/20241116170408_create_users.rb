# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    rename_column :users, :email, :email_address
    rename_column :users, :encrypted_password, :password_digest
  end
end
