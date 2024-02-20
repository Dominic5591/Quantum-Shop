class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.integer :quantity, null: false
      t.float :price, null: false
      t.references :product, foreign_key: true, null: false
      t.references :order, foreign_key: true, null: false
      t.timestamps
    end
  end
end