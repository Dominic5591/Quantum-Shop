class Api::ProductsController < ApplicationController
  def index 
    @products = Product.all 
    render :index
  end

  def show 
    @product = Product.find_by(id: params[:id])
    if @product 
        render :show
    else 
        render json: { product: nil }
    end 
  end 


  def search
    @products = Product.search_names(params[:q])
    render :search
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end


  def product_params
    params.require(:product).permit(:name, :description, :price, :category)
  end
end