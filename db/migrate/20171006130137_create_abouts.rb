class CreateAbouts < ActiveRecord::Migration[5.1]
  def change
    create_table :abouts do |t|
      t.string :job_title
      t.text :description
      t.string :cv
      t.string :locale, index: true
      t.string :contentful_id, index: true

      t.timestamps
    end
  end
end
