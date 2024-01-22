class Api::CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:show, :update, :destroy]

  def index
    @cart_items = current_user.cart_items.includes(:product)
  end


  def create
    @cart_item = current_user.cart_items.build(cart_item_params)

    if @cart_item.save
      render :show, status: :created
    else
      render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @cart_item.update(cart_item_params)
      render :show
    else
      render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @cart_item.destroy
    head :no_content
  end

  private

  def set_cart_item
    @cart_item = current_user.cart_items.find(params[:id])
  end

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :quantity)
  end

end
