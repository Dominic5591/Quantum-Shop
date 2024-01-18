json.extract! @product, :id, :name, :price, :category, :rating


json.description @product.description.split("\n")