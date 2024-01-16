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
categories = ['Electronics', 'Books', 'Clothing', 'Home & Kitchen', 'Toys']

categories.each do |category|
  Category.create(name: category)
end

# Products
Product.create(
  title: 'Smartphone',
  description: 'High-end smartphone with advanced features.',
  price: 799.99,

  category: Category.find_by(name: 'Electronics')
)

Product.create(
  title: 'Bestseller Book',
  description: 'A captivating bestseller that everyone is talking about.',
  price: 19.99,
  category: Category.find_by(name: 'Books')
)

# Add more products as needed


  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Done!"
end
