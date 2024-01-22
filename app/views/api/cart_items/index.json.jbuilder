json.array! @cart_items do |cart_item|
  json.extract! cart_item, :id, :product_quantity

  json.user do
    json.extract! cart_item.user, :id, :username, :email
  end

  json.product do
    json.extract! cart_item.product, :id, :name, :description, :price, :category
  end
end