json.array! @cart_items do |cart_item|
  json.extract! cart_item, :id, :quantity, :product_id, :user_id
end
