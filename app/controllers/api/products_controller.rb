class Api::ProductsController < ApplicationController
  before_action :set_product, only: [ :show ]

  def index
    @products = Product.all
  end

  def show
    Product.find(params[:id])
    render :show
  end



  def create
    @product = Product.new(product_params)

    if @product.save
      redirect_to @product, notice: 'Product was successfully created.'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end



  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:title, :description, :price, :category)
  end
end


end
