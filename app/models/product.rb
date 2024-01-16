class Product < ApplicationRecord
  validates :name, :description, :price, :category presence: true
  

  

end
