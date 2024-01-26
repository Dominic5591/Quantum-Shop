json.extract! @product, :id, :name, :price, :category, :rating, :description


json.description @product.description.split("\n")
json.photoUrl @product.photo.attached? ? @product.photo.url : nil