class Api::OrdersController < ApplicationController
  wrap_parameters include: Order.attribute_names + ['quantity', 'userId', 'productId', 'orderItems']
  before_action :require_logged_in, only: [:index]

  def index
    @orders = current_user.orders
    render :index
  end

  def create
    @order = Order.new(order_params)
    order_items_params = params.require(:orderItems).permit!.to_h
    order_items = order_items_params.map do |order_item_params|
      OrderItem.new(order_item_params)
    end
    @order.order_items = order_items

    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: :unprocessable_entity
    end
  end


  private

  def order_params
    params.permit(:userId, orderItems: [:productId, :quantity])
  end
end
