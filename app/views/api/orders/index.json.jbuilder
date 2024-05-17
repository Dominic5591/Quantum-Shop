json.orders do
  @orders.each do |order|
    json.set! order.id do
      json.items order.order_items do |order_item|
        json.user_id order.user_id
        json.product_id order_item.product_id
        json.quantity order_item.quantity
      end
    end
  end
end