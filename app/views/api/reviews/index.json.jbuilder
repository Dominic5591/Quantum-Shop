json.reviews do
  if @reviews
    @reviews.each do |review|
      json.set! review.id do
        json.extract! @review, :id, :title, :rating, :body, :user_id, :product_id
        json.extract! @review.user, :username, :email
      end
    end
  end
end