
require 'open-uri'

puts "Destroying Tables..."
# Unnecessary if using `rails db:seed:replant`
User.destroy_all
OrderItem.destroy_all
Order.destroy_all
Product.destroy_all


puts "Resetting Primary Keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1



ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')
ApplicationRecord.connection.reset_pk_sequence!('orders')
ApplicationRecord.connection.reset_pk_sequence!('order_items')


load(Rails.root.join('db', 'seeds', 'electronics.rb',).to_s)
load(Rails.root.join('db', 'seeds', 'home.rb',).to_s)
load(Rails.root.join('db', 'seeds', 'fashion.rb',).to_s)
load(Rails.root.join('db', 'seeds', 'books.rb',).to_s)

puts "Creating Users..."
# Create one user with an easy to remember username, email, and password:
User.create!(
  username: 'Demo-User', 
  email: 'demo@user.io', 
  password: 'password'
)


names = ['Mike', 'Sarah', 'John', 'Emma', 'David', 'Olivia', 'James', 'Isabella', 'Robert', 'Ava', 'Liam', 'Emily', 'Noah', 'Elizabeth', 'William', 'Sophia', 'Mason', 'Mia', 'Ethan', 'Charlotte']

names.each_with_index do |name, index|
  User.create!(
    username: name,
    email: "#{name.downcase}#{index + 1}@user.io",
    password: 'password'
  ) 
end




puts 'Creating Reviews'

# Reviews for the keyboard
Review.create!(
  title: "Great Keyboard",
  body: "The Razer Huntsman Mini is a fantastic gaming keyboard. The switches are incredibly responsive, and the Chroma RGB lighting adds a nice touch. Highly recommended!",
  rating: "5",
  user_id: "1",
  product_id: "1"
)

Review.create!(
  title: "Keyboard Performance",
  body: "I've been using the Razer Huntsman Mini for a few months now, and I'm thoroughly impressed with its performance. The build quality is excellent, and the customization options are top-notch. Would buy again.",
  rating: "4",
  user_id: "2",
  product_id: "1"
)

# Reviews for the monitor
Review.create!(
  title: "Amazing Monitor",
  body: "The SAMSUNG Odyssey G65B is a game-changer. The QHD resolution and 240Hz refresh rate make for an incredibly smooth gaming experience. The HDR 600 feature really brings out the colors in games. Highly recommended!",
  rating: "5",
  user_id: "3",
  product_id: "2"
)

Review.create!(
  title: "Monitor Quality",
  body: "I've been using the SAMSUNG Odyssey G65B for a few months, and I'm really impressed with its quality. The picture is crisp and clear, and the response time is excellent. It's a great addition to any gaming setup.",
  rating: "4",
  user_id: "4",
  product_id: "2"
)

# Reviews for the TV
Review.create!(
  title: "TV Performance",
  body: "The VIZIO D-Series TV offers a great viewing experience with its 1080p resolution and full array LED backlight. The IQ Picture Processor and V-Gaming Engine make for a smooth and responsive gaming experience. Highly recommended!",
  rating: "4",
  user_id: "5",
  product_id: "3"
)

Review.create!(
  title: "TV Quality",
  body: "I've been using the VIZIO D-Series TV for a few months, and I'm really impressed with its quality. The picture is crisp and clear, and the response time is excellent. It's a great addition to any gaming setup.",
  rating: "4",
  user_id: "6",
  product_id: "3"
)

# Reviews for the SSD
Review.create!(
  title: "SSD Speed",
  body: "The Western Digital WD_BLACK SSD offers incredible speed with up to 5,150MB/s read speeds. The PCIe Gen4 interface ensures smooth performance in games and applications. Highly recommended!",
  rating: "5",
  user_id: "7",
  product_id: "4"
)

Review.create!(
  title: "SSD Performance",
  body: "I've been using the Western Digital WD_BLACK SSD for a few months, and I'm really impressed with its performance. The speed is unmatched, and the drive is very reliable. It's a great upgrade for any gaming PC.",
  rating: "4",
  user_id: "8",
  product_id: "4"
)

# Reviews for the Mouse
Review.create!(
  title: "Mouse Accuracy",
  body: "The Corsair Dark Core RGB Pro offers excellent accuracy and precision with its 18,000 DPI optical sensor. The SLIPSTREAM WIRELESS technology ensures a seamless gaming experience. Highly recommended!",
  rating: "5",
  user_id: "9",
  product_id: "5"
)

Review.create!(
  title: "Mouse Comfort",
  body: "I've been using the Corsair Dark Core RGB Pro for a few months, and I'm really impressed with its comfort and precision. The interchangeable side grips allow for a tailored fit, and the wireless connectivity is a bonus. It's a great choice for any gamer.",
  rating: "4",
  user_id: "10",
  product_id: "5"
)

# Reviews for the Laptop
Review.create!(
  title: "Laptop Performance",
  body: "The Acer Predator Helios 16 offers top-notch performance with its 13th Gen Intel Core i7 processor and NVIDIA GeForce RTX 4060 GPU. The 165Hz G-SYNC display ensures a smooth gaming experience. Highly recommended!",
  rating: "5",
  user_id: "11",
  product_id: "6"
)

Review.create!(
  title: "Laptop Build",
  body: "I've been using the Acer Predator Helios 16 for a few months, and I'm really impressed with its build quality and performance. The laptop is powerful and versatile, making it great for both gaming and productivity tasks.",
  rating: "4",
  user_id: "12",
  product_id: "6"
)

# Reviews for the Power Supply
Review.create!(
  title: "Power Supply Reliability",
  body: "The Thermaltake Toughpower GX3 offers excellent reliability with its 80 PLUS Gold certification. The PCIe Gen. 5 readiness ensures compatibility with the latest hardware. Highly recommended!",
  rating: "4",
  user_id: "13",
  product_id: "7"
)

Review.create!(
  title: "Power Supply Quality",
  body: "I've been using the Thermaltake Toughpower GX3 for a few months, and I'm really impressed with its quality and reliability. The power supply is quiet and efficient, making it a great choice for any PC build.",
  rating: "4",
  user_id: "14",
  product_id: "7"
)

# Reviews for the RAM
Review.create!(
  title: "RAM Speed",
  body: "The Corsair VENGEANCE LPX DDR4 RAM offers excellent speed with its 3200MHz clock speed. The hand-sorted memory chips ensure high performance and reliability. Highly recommended!",
  rating: "5",
  user_id: "15",
  product_id: "8" 
)

Review.create!(
  title: "RAM Quality",
  body: "I've been using the Corsair VENGEANCE LPX DDR4 RAM for a few months, and I'm really impressed with its quality and performance. The RAM is reliable and offers excellent speed, making it a great upgrade for any PC.",
  rating: "4",
  user_id: "16",
  product_id: "8" 
)

# Reviews for the Headphones
Review.create!(
  title: "Headphones Comfort",
  body: "The Sony WH-CH720N offers excellent comfort and sound quality with its noise-canceling feature. The microphone and Alexa built-in make it a versatile choice for gaming and everyday use. Highly recommended!",
  rating: "5",
  user_id: "17", 
  product_id: "9"
)

Review.create!(
  title: "Headphones Sound",
  body: "I've been using the Sony WH-CH720N for a few months, and I'm really impressed with its sound quality and comfort. The noise-canceling feature is a game-changer, and the battery life is excellent. It's a great choice for any gamer or music lover.",
  rating: "4",
  user_id: "18", 
  product_id: "9"
)

# Reviews for the Pad
Review.create!(
  title: "Pad Functionality",
  body: "The Novation Launchpad X Grid Controller offers excellent functionality with its large RGB velocity- and pressure-sensitive pads. The deep integration with Ableton Live makes it a must-have for any musician or producer. Highly recommended!",
  rating: "5",
  user_id: "19", 
  product_id: "10"
)

Review.create!(
  title: "Pad Build",
  body: "I've been using the Novation Launchpad X Grid Controller for a few months, and I'm really impressed with its build quality and functionality. The pads are responsive and the software integration is seamless. It's a great tool for any musician or producer.",
  rating: "4",
  user_id: "20",
  product_id: "10"
)

puts "Done!"

