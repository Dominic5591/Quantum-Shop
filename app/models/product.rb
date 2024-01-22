class Product < ApplicationRecord
  validates :name, :description, :price, :category, presence: true
  validates :rating, inclusion: {in: 1..5}, presence: true

  
  has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem,
    dependent: :destroy
end
