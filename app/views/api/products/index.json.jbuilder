json.array! @products do |product|
  json.extract! product, :id, :name, :price, :rating
end
