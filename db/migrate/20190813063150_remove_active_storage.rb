# frozen_string_literal: true

class RemoveActiveStorage < ActiveRecord::Migration[6.0]
  def change
    drop_active_storage_attachments
    drop_active_storage_blobs
  end

  def drop_active_storage_attachments
    drop_table :active_storage_attachments do |table|
      table.string     :name,     null: false
      table.references :record,   null: false, polymorphic: true, index: false
      table.references :blob,     null: false

      table.datetime :created_at, null: false

      table.index %i[record_type record_id name blob_id], name: 'index_active_storage_attachments_uniqueness', unique: true
      table.foreign_key :active_storage_blobs, column: :blob_id
    end
  end

  def drop_active_storage_blobs
    drop_table :active_storage_blobs do |table|
      table.string   :key,        null: false
      table.string   :filename,   null: false
      table.string   :content_type
      table.text     :metadata
      table.bigint   :byte_size,  null: false
      table.string   :checksum,   null: false
      table.datetime :created_at, null: false

      table.index %i[key], unique: true
    end
  end
end
