class OrderItem < ApplicationRecord
  belongs_to :order,
    dependent: :destroy
  belongs_to :product,
    dependent: :destroy
end
