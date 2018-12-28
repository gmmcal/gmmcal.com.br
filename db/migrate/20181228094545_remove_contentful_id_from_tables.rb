class RemoveContentfulIdFromTables < ActiveRecord::Migration[5.2]
  def change
    # Remove Indexes
    remove_index :abouts, :contentful_id
    remove_index :educations, :contentful_id
    remove_index :skills, :contentful_id
    remove_index :work_experiences, :contentful_id

    # Remove Columns
    remove_column :abouts, :contentful_id, :string
    remove_column :educations, :contentful_id, :string
    remove_column :skills, :contentful_id, :string
    remove_column :work_experiences, :contentful_id, :string
  end
end
