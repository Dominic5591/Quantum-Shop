json.search do 
  @products.each do |product|
      json.set! product.id do 
          json.extract! product, :id, :name, :category, :price, :description
      end
  end 
end