class Api::ProductsController < ApplicationController
  
  def index 
    @page = [(params[:page] || 1).to_i, 1].max
    @per_page = 10
    @category = params[:category] || 'all'
    @products = Product.paginated(@page, @per_page, @category)
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
    @page = [(params[:page] || 1).to_i, 1].max
    @per_page = 10
    @q = params[:q]
    @category = params[:category] || 'all'
    @products = Product.search_names(@q, @category, @page, @per_page)
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