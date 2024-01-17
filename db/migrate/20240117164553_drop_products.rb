class DropProducts < ActiveRecord::Migration[7.0]
  def change
    drop_table :products

    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.integer :rating
      t.timestamps
    end
    add_index :products, :category
  end
end
