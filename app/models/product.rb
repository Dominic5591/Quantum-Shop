class Product < ApplicationRecord
  validates :name, :description, :price, :category, presence: true
  validates :rating, inclusion: {in: 1..5}, presence: true

  has_one_attached :photo

  has_many :reviews, 
    dependent: :destroy

  has_many :order_items, 
    dependent: :destroy
  
  has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem,
    dependent: :destroy


  def self.search_names(query)
    where("lower(name) LIKE ?", "%#{sanitize_sql_like(query)}%")
  end


end
