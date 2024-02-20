class ChangeOrders < ActiveRecord::Migration[7.0]
  def change
    drop_table :orders
    create_table :orders do |t|
      t.integer :quantity, null: false
      t.float :total_price, null: false
      t.references :product, foreign_key: true, null: false 
      t.references :user, foreign_key: true, null: false 
      t.timestamps
    end
    add_index :orders, :user_id
    add_index :orders, :product_id
  end
end
