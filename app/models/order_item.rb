class OrderItem < ApplicationRecord
  validates :quantity, presence: true
  validates :price, presence: true
  validates :product_id, presence: true
  validates :order_id, presence: true

  belongs_to :product
  belongs_to :order
end
