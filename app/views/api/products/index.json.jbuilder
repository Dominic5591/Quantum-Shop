
@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :rating, :category, :description
    json.description product.description.split("\n")
    json.photoUrl product.photo.attached? ? product.photo.url : nil
  end
end

