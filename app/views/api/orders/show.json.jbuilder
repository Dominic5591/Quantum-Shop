json.order do
  json.id @order.id
  json.user_id @order.user_id
  json.items @order.order_items do |order_item|
    json.id order_item.id
    json.product_id order_item.product_id
  end
end
