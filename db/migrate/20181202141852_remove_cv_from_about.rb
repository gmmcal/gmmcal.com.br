# frozen_string_literal: true

class RemoveCvFromAbout < ActiveRecord::Migration[5.2]
  def up
    remove_column :abouts, :cv
  end

  def down
    add_column :abouts, :cv, :string
  end
end
