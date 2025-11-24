# This migration comes from active_storage (originally 20170806125915)
class CreateActiveStorageTables < ActiveRecord::Migration[7.0]
  def change
    # Use Active Record's configured type for primary and foreign keys
    primary_key_type, foreign_key_type = primary_and_foreign_key_types

    create_table :active_storage_blobs, id: primary_key_type do |table|
      table.string   :key,          null: false
      table.string   :filename,     null: false
      table.string   :content_type
      table.text     :metadata
      table.string   :service_name, null: false
      table.bigint   :byte_size,    null: false
      table.string   :checksum

      if connection.supports_datetime_with_precision?
        table.datetime :created_at, precision: 6, null: false
      else
        table.datetime :created_at, null: false
      end

      table.index [ :key ], unique: true
    end

    create_table :active_storage_attachments, id: primary_key_type do |table|
      table.string     :name,     null: false
      table.references :record,   null: false, polymorphic: true, index: false, type: foreign_key_type
      table.references :blob,     null: false, type: foreign_key_type

      if connection.supports_datetime_with_precision?
        table.datetime :created_at, precision: 6, null: false
      else
        table.datetime :created_at, null: false
      end

      table.index [ :record_type, :record_id, :name, :blob_id ], name: :index_active_storage_attachments_uniqueness, unique: true
      table.foreign_key :active_storage_blobs, column: :blob_id
    end

    create_table :active_storage_variant_records, id: primary_key_type do |table|
      table.belongs_to :blob, null: false, index: false, type: foreign_key_type
      table.string :variation_digest, null: false

      table.index [ :blob_id, :variation_digest ], name: :index_active_storage_variant_records_uniqueness, unique: true
      table.foreign_key :active_storage_blobs, column: :blob_id
    end
  end

  private
    def primary_and_foreign_key_types
      config = Rails.configuration.generators
      setting = config.options[config.orm][:primary_key_type]
      primary_key_type = setting || :primary_key
      foreign_key_type = setting || :bigint
      [ primary_key_type, foreign_key_type ]
    end
end
