class CartItem < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates :product_quantity, presence: true
  validates :user, presence: true
  validates :product, presence: true
end
