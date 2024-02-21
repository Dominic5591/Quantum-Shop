json.orders do
  @orders.each do |order|
    json.set! order.id do
      json.user_id order.user_id
      json.items order.order_items do |order_item|
        # json.id order_item.id
        json.product_id order_item.product_id
        json.quantity order_item.quantity
      end
    end
  end
end



# {
#   "order": {
#     "order_items": [
#       { "product_id": 1, "quantity": 2 },
#       { "product_id": 2, "quantity": 1 }
#     ]
#   }
# }


# json.orders do
#   @orders.each do |order|
#     json.set! order.id do
#       json.user_id order.user_id
#       json.items order.order_items do |order_item|
#         json.array! order_item.id do
#           json.product_id order_item.product_id
#           json.quantity order_item.quantity
#         end
#       end
#     end
#   end
# end

