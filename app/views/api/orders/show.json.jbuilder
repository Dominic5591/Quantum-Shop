json.order do
  json.extract! @order, :id, :quantity, :product_id, :user_id
end

json.product do
  json.extract! @order.product, :id, :name, :category, :price
end