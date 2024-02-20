class Api::OrderItemsController < ApplicationController
  def create
    @order_item = OrderItem.new(order_item_params)
    if @order_item.save
      render json: @order_item, status: :created
    else
      render json: { errors: @order_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def order_item_params
    params.require(:order_item).permit(:quantity, :price, :product_id, :order_id)
  end
end
