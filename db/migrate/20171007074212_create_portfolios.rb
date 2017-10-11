class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.string :title
      t.string :caption
      t.string :url
      t.string :thumbnail
      t.string :image
      t.string :categories, array: true
      t.integer :order, default: 0, index: true
      t.string :locale, index: true
      t.string :contentful_id, index: true

      t.timestamps
    end
  end
end
