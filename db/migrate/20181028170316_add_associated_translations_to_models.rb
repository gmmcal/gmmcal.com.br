# frozen_string_literal: true

class AddAssociatedTranslationsToModels < ActiveRecord::Migration[5.2]
  def change
    add_column :abouts, :translation_id, :integer
    add_column :educations, :translation_id, :integer
    add_column :skills, :translation_id, :integer
    add_column :work_experiences, :translation_id, :integer

    add_index :abouts, :translation_id
    add_index :educations, :translation_id
    add_index :skills, :translation_id
    add_index :work_experiences, :translation_id
  end
end
