class Product < ApplicationRecord
  validates :name, :description, :price, :category, presence: true
  validates :rating, inclusion: {in: 1..5}, presence: true

  

end
