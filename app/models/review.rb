class Review < ApplicationRecord
  validates :rating, :title, :product_id, :user_id, presence: true

  belongs_to :product
  belongs_to :user
end
