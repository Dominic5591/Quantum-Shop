json.orders do
  @orders.each do |order|
    json.set! order.id do
      json.array! order.order_items do |order_item|
        json.set! order_item.product_id do
          json.product_id order_item.product_id
          json.user_id order.user_id
        end
      end
    end
  end
end
