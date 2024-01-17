ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )


  # db/seeds.rb

# Categories
puts "Creating products..."

Product.create(
  name: 'Smartphone',
  description: 'High-end smartphone with advanced features.',
  price: 799.99,
  category: 'Electronics',
  rating: 4
)

Product.create(
  name: 'Bestseller Book',
  description: 'A captivating bestseller that everyone is talking about.',
  price: 19.99,
  category: 'Books',
  rating: 3
)

Product.create(
  name: 'Ultra HD Smart TV',
  description: 'Experience stunning visuals with our Ultra HD Smart TV.',
  price: 1299.99,
  category: 'Electronics',
  rating: 4
)

Product.create(
  name: 'Cookbook Collection',
  description: 'Unlock your culinary skills with this collection of popular cookbooks.',
  price: 49.99,
  category: 'Books',
  rating: 1
)

Product.create(
  name: 'Wireless Bluetooth Earbuds',
  description: 'Enjoy high-quality sound and wireless freedom with our Bluetooth earbuds.',
  price: 79.99,
  category: 'Electronics',
  rating: 3
)

Product.create(
  name: 'Sci-Fi Adventure Novel',
  description: 'Embark on an epic sci-fi journey with this thrilling adventure novel.',
  price: 24.99,
  category: 'Books',
  rating: 5
)


Product.create(
  name: 'Smartwatch',
  description: 'Stay connected and track your fitness with this advanced smartwatch.',
  price: 149.99,
  category: 'Electronics',
  rating: 4
)

Product.create(
  name: 'Gourmet Coffee Beans',
  description: 'Experience the rich flavors of gourmet coffee with these premium beans.',
  price: 19.99,
  category: 'Groceries',
  rating: 4
)

Product.create(
  name: 'Wireless Noise-Canceling Headphones',
  description: 'Immerse yourself in music with these high-quality wireless headphones.',
  price: 129.99,
  category: 'Electronics',
  rating: 5
)

Product.create(
  name: 'Mystery Thriller Book',
  description: 'Unravel the secrets and suspense with this gripping mystery thriller.',
  price: 18.99,
  category: 'Books',
  rating: 4
)


# Add more products as needed


  # More users
  # 10.times do 
  #   User.create!({
  #     username: Faker::Internet.unique.username(specifier: 3),
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   }) 
  # end

  puts "Done!"
end
