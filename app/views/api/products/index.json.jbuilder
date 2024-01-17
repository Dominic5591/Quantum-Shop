json.array! @products do |product|
  json.extract! product, :id, :name, :price, :rating
  # json.url product_url(product, format: :json)
end
