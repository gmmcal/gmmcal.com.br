# frozen_string_literal: true

class RemoveCvFromAbouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :abouts, :cv, :string
  end
end
