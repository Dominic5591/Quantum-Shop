# class Api::OrdersController < ApplicationController
#   def index
#     @orders = current_user.orders
#     render :index
#   end

#   def create
#     @order = current_user.orders.build

#     if @order.save
#       render :show
#     else
#       render json: @order.errors, status: :unprocessable_entity
#     end
#   end
# end



class Api::OrdersController < ApplicationController
  before_action :require_logged_in, only: [:index]
  def index
    if current_user 
      @orders = current_user.orders
      render :index
    end
  end


  def create
    @order = current_user.orders.build

    if @order.save
      order_items_params[:items].each do |item_params|
        @order.order_items.create(item_params)
      end

      render :show
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private

  def order_items_params
    params.require(:order).permit(items: [:product_id, :quantity])
  end
end
