class Api::ProductsController < ApplicationController
  
  def index 
    @page = [(params[:page] || 1).to_i, 1].max
    @per_page = 10
    @products = Product.paginated(@page, @per_page)
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
    @products = Product.search_names(params[:q], params[:category])
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