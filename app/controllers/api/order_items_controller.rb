class Api::OrderItemsController < ApplicationController
  before_action :require_logged_in, only: [:index]

  def index
    @order_items = current_user.order_items
    render :index
  end

  def create
    @order_item = current_user.order_items.build(order_item_params)

    if @order_item.save
      render 'show.json.jbuilder', status: :created
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  private

  def order_item_params
    params.require(:order_item).permit(:order_id, :product_id, :quantity)
  end
end
