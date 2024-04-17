class Api::ReviewsController < ApplicationController
  wrap_parameters include: Review.attribute_names + ['title', 'rating', 'body', 'userId', 'productId']

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])

    if @review
      render :show
    else
      render json: { review: nil }
    end
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity 
    end
  end 


  def update
    @review = Review.find(params[:id])

    if @review
      if @review.update(review_params)
        render :show
      else
        render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity 
      end
    end
  end


  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.delete
      head :no_content
    end
  end


  def review_params
    params.require(:review).permit(:id, :title, :rating, :body, :user_id, :product_id, :username)
  end
end