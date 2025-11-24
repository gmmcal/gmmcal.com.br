class MoveToRichtext < ActiveRecord::Migration[8.1]
  def change
    rename_column :abouts, :description, :legacy_description
    rename_column :educations, :description, :legacy_description
    rename_column :work_experiences, :description, :legacy_description
  end
end
