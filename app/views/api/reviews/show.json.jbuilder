json.reviews do
  json.extract! @review, :id, :title, :rating, :body, :user_id, :product_id
  json.extract! @review.user, :username, :email
  json.product do
    json.extract! @review.product, :name, :price, :category, :description
  end
end