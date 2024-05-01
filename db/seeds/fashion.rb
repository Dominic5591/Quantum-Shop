require 'open-uri'

puts "Creating Fashion"





hoodie = Product.create(
name: 'adidas Originals Mens Trefoil Warm-up Hoodie',
description: [
  'Pullover hoodie made with soft French terry for casual style',
  'Regular fit is not tight and not loose, the perfect in-between fit',
  'Kangaroo pocket for storage',
  'Drawcord on hood for an adjustable fit; Ribbed cuffs and hem keep hoodie in place',
  'By buying cotton products from us, youre supporting more sustainable cotton farming; this is part of our ambition to end plastic waste'
],
price: 38.99,
category: 'fashion',
rating: 3
)

hoodie.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/hoodie.jpg'), filename: 'hoodie.jpg')

sweater = Product.create(
name: 'MAGCOMSEN Sweater 1/4 Zip Up Casual Turtleneck Pullover Polo Sweaters Fall Winter Sweatshirts',
description: [
  '[Fabric] 89% cotton and 11% Nylon. The soft fabric is of good quality and so quite comfortable.',
  '[Comfortable] The casual sweater features a regular fit, stretch, moderate thickness, comfortable fit with long sleeves.',
  '[Keep Warm] The heavyweight sweatshirt helps in keeping you warm with thermal mock neck and half zip up. It functions as an active wear for fall/autumn, even in winter.',
  '[Fashion] The knitted pattern and rib-knit at the hem, cuffs can help make a fashion statement. And the basic designed and solid colors polo sweatshirts will never be old.',
  '[Suitable For] This polo sweater is good for different occasions like business, casual, party and is for both young and older men. There are also 5 different sizes to choose from to ensure the perfect fit for you.'
],
price: 35.99,
category: 'fashion',
rating: 4
)

sweater.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/sweater.jpg'), filename: 'sweater.jpg')


watch = Product.create(
name: 'Lacoste Club Quartz Watch',
description: [
  'A Classic Watch: The Lacoste Club is a slim and elegant three-hand design with a polished case, offered with a smooth leather strap. The center zone of the semi-gloss dial features a diagonal stripe, in a subtle nod to the brands sporting heritage, and is finished with a signature crocodile.',
  'Quality Materials: Lacoste Club, stainless steel case, black dial with index, black leather strap.',
  'Quartz Accuracy: Quartz movement provides precise timekeeping and minimal maintenance for a reliable and worry-free timepiece.',
  'Durable Mineral Crystal: Made from glass and protects watch from scratches.'
],
price: 145.99,
category: 'fashion',
rating: 5
)


watch.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/watch.jpg'), filename: 'watch.jpg')

beanie = Product.create(
name: 'PAGE ONE Womens Winter Ribbed Beanie Crossed Cap Chunky Cable Knit Pompom Soft Warm Hat',
description: [
  'HOW TO WEAR IN WINTER: Wear a stylish outdoor cap in cold winter, which will keep your head and ears warm in outdoor activities, including football matches, ice skating, skiing, hiking and walking dogs. Thick cable knit for better warmth. The preferred casual hat for women.',
  'HIGE QUALITY: 101% acrylic, this crocheted hat is thick. It can be machine washed and should be hung up to dry.',
  'COMFORTABLE TO WEAR: This warm hat is made of high quality materials and is designed to suit you. Excellent elasticity, making the cap fully adjustable. Stretches to fit all noggins and crazy hairdos. Its so comfortable that you wont want to take it off',
  'FASHION STYLE Whether you stay at home or go out, youll look effortlessly stylish in this beanie.'
],
price: 9.99,
category: 'fashion',
rating: 4
)

beanie.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/beanie.jpg'), filename: 'beanie.jpg')


gloves = Product.create(
name: 'Achiou Winter Gloves for Men Women, Touch Screen Texting Warm Gloves with Thermal Soft Knit Lining,Elastic Cuff',
description: [
  'Comfortable & Warm Soft and warm lining design, provide warmth and functionality for driving, typing or cold-weather commuting. The knit fabric has a four-way stretch, so your wiggly digits have the freedom of movement they require and can stay in their natural, relaxed position as you use computer and mobile phone',
  'Touch Sensitive & Anti-Slip Palm The Unique and Practical 3 Touchscreen Capability design(thumb, forefinger, middle finger) that assures you wont have to remove the glove in order to use your phone. Palm large area triangle silicone palm grip keeps that precious phone secure',
  'Perfectly Fits & Best Gifts Achiou high-quality gloves with excellent elasticity, Stretches to fit no matter the size of your hand. The best gift for your friends, family or anyone you loved',
  'Convenient & Breathable Material Living in the technology age, Achiou winter knit gloves let you use your phone without having to expose your hands. Breathable material allows the gloves to ventilate in order to decrease sweat accumulation'
],
price: 19.99,
category: 'fashion',
rating: 3
)


gloves.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/gloves.jpg'), filename: 'gloves.jpg')

jacket = Product.create(
name: 'MOERDENG Womens Waterproof Ski Jacket Warm Winter Snow Coat Mountain Windbreaker Hooded Raincoat Jacket',
description: [
  'Waterproof Windproof Snow Ski Jacket, also can fights bad rainy or misty weather, Keep your body always dry and comfortable when you are outside.',
  'Adjustable cuffs help to seal and keep warm, and the inner wear-resistant soft shell is highly wind-resistant.',
  'Professional water repellent coated, fluff lining and durable fabric guarantees the best heat retention, Relaxed-fit style with quick-dry material.',
  'Multipurpose Downhill Skiing, Snowboarding, Snowsports and other winter outdoor sports.'
],
price: 54.99,
category: 'fashion',
rating: 4
)

jacket.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/jacket.jpg'), filename: 'jacket.jpg')


jacket2 = Product.create(
name: 'CAMEL CROWN Mens Mountain Snow Waterproof Ski Jacket Detachable Hood Windproof Fleece Parka Rain Jacket Winter Coat',
description: [
  'WATERPROOF- winter ski jacket for men has a waterproof index of 10,000mm. All the zippers are waterproof and can prevent water from permeating into the jacket. Now, with our advanced waterproof jacket, you dont have to worry about fog',
  'WARM & WINDBREAKER Jacket-This rain jacket for men is designed with a detachable hood and adjustable hem as well as elastic cuffs to seal off any openings where air may come in.',
  'Anti-SCRATCH & WEAR RESISTANT -- The Ski coats shell is made of the polymer blending material. The strong textile fiber fabric shell, which can reduce the risk of accidental injury, avoids being scratched by rocks and branches and at the same time protects your body.',
  'MUTI-POCKET: The snow jacket for men with 2 zip-secured hand pockets, 1 zippered inner pocket and inner big pocket, and 1 waterproof chest zipper pocket. this winter jacket lets you conveniently bring your keys, wallet, and phone when you do outdoor sports.'
],
price: 42.99,
category: 'fashion',
rating: 5
)


jacket2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/jacket2.jpg'), filename: 'jacket2.jpg')





hoodie2 = Product.create(
name: 'adidas Originals Mens Trefoil Warm-up Hoodie',
description: [
  'Pullover hoodie made with soft French terry for casual style',
  'Regular fit is not tight and not loose, the perfect in-between fit',
  'Kangaroo pocket for storage',
  'Drawcord on hood for an adjustable fit; Ribbed cuffs and hem keep hoodie in place',
  'By buying cotton products from us, youre supporting more sustainable cotton farming; this is part of our ambition to end plastic waste'
],
price: 38.99,
category: 'fashion',
rating: 3
)

hoodie2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/hoodie.jpg'), filename: 'hoodie.jpg')

sweater2 = Product.create(
name: 'MAGCOMSEN Sweater 1/4 Zip Up Casual Turtleneck Pullover Polo Sweaters Fall Winter Sweatshirts',
description: [
  '[Fabric] 89% cotton and 11% Nylon. The soft fabric is of good quality and so quite comfortable.',
  '[Comfortable] The casual sweater features a regular fit, stretch, moderate thickness, comfortable fit with long sleeves.',
  '[Keep Warm] The heavyweight sweatshirt helps in keeping you warm with thermal mock neck and half zip up. It functions as an active wear for fall/autumn, even in winter.',
  '[Fashion] The knitted pattern and rib-knit at the hem, cuffs can help make a fashion statement. And the basic designed and solid colors polo sweatshirts will never be old.',
  '[Suitable For] This polo sweater is good for different occasions like business, casual, party and is for both young and older men. There are also 5 different sizes to choose from to ensure the perfect fit for you.'
],
price: 35.99,
category: 'fashion',
rating: 4
)

sweater2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/sweater.jpg'), filename: 'sweater.jpg')


watch2 = Product.create(
name: 'Lacoste Club Quartz Watch',
description: [
  'A Classic Watch: The Lacoste Club is a slim and elegant three-hand design with a polished case, offered with a smooth leather strap. The center zone of the semi-gloss dial features a diagonal stripe, in a subtle nod to the brands sporting heritage, and is finished with a signature crocodile.',
  'Quality Materials: Lacoste Club, stainless steel case, black dial with index, black leather strap.',
  'Quartz Accuracy: Quartz movement provides precise timekeeping and minimal maintenance for a reliable and worry-free timepiece.',
  'Durable Mineral Crystal: Made from glass and protects watch from scratches.'
],
price: 145.99,
category: 'fashion',
rating: 5
)


watch2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/watch.jpg'), filename: 'watch.jpg')

beanie2 = Product.create(
name: 'PAGE ONE Womens Winter Ribbed Beanie Crossed Cap Chunky Cable Knit Pompom Soft Warm Hat',
description: [
  'HOW TO WEAR IN WINTER: Wear a stylish outdoor cap in cold winter, which will keep your head and ears warm in outdoor activities, including football matches, ice skating, skiing, hiking and walking dogs. Thick cable knit for better warmth. The preferred casual hat for women.',
  'HIGE QUALITY: 101% acrylic, this crocheted hat is thick. It can be machine washed and should be hung up to dry.',
  'COMFORTABLE TO WEAR: This warm hat is made of high quality materials and is designed to suit you. Excellent elasticity, making the cap fully adjustable. Stretches to fit all noggins and crazy hairdos. Its so comfortable that you wont want to take it off',
  'FASHION STYLE Whether you stay at home or go out, youll look effortlessly stylish in this beanie.'
],
price: 9.99,
category: 'fashion',
rating: 4
)

beanie2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/beanie.jpg'), filename: 'beanie.jpg')


gloves2 = Product.create(
name: 'Achiou Winter Gloves for Men Women, Touch Screen Texting Warm Gloves with Thermal Soft Knit Lining,Elastic Cuff',
description: [
  'Comfortable & Warm Soft and warm lining design, provide warmth and functionality for driving, typing or cold-weather commuting. The knit fabric has a four-way stretch, so your wiggly digits have the freedom of movement they require and can stay in their natural, relaxed position as you use computer and mobile phone',
  'Touch Sensitive & Anti-Slip Palm The Unique and Practical 3 Touchscreen Capability design(thumb, forefinger, middle finger) that assures you wont have to remove the glove in order to use your phone. Palm large area triangle silicone palm grip keeps that precious phone secure',
  'Perfectly Fits & Best Gifts Achiou high-quality gloves with excellent elasticity, Stretches to fit no matter the size of your hand. The best gift for your friends, family or anyone you loved',
  'Convenient & Breathable Material Living in the technology age, Achiou winter knit gloves let you use your phone without having to expose your hands. Breathable material allows the gloves to ventilate in order to decrease sweat accumulation'
],
price: 19.99,
category: 'fashion',
rating: 3
)


gloves2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/gloves.jpg'), filename: 'gloves.jpg')

jacket3 = Product.create(
name: 'MOERDENG Womens Waterproof Ski Jacket Warm Winter Snow Coat Mountain Windbreaker Hooded Raincoat Jacket',
description: [
  'Waterproof Windproof Snow Ski Jacket, also can fights bad rainy or misty weather, Keep your body always dry and comfortable when you are outside.',
  'Adjustable cuffs help to seal and keep warm, and the inner wear-resistant soft shell is highly wind-resistant.',
  'Professional water repellent coated, fluff lining and durable fabric guarantees the best heat retention, Relaxed-fit style with quick-dry material.',
  'Multipurpose Downhill Skiing, Snowboarding, Snowsports and other winter outdoor sports.'
],
price: 54.99,
category: 'fashion',
rating: 4
)

jacket3.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/jacket.jpg'), filename: 'jacket.jpg')


jacket4 = Product.create(
name: 'CAMEL CROWN Mens Mountain Snow Waterproof Ski Jacket Detachable Hood Windproof Fleece Parka Rain Jacket Winter Coat',
description: [
  'WATERPROOF- winter ski jacket for men has a waterproof index of 10,000mm. All the zippers are waterproof and can prevent water from permeating into the jacket. Now, with our advanced waterproof jacket, you dont have to worry about fog',
  'WARM & WINDBREAKER Jacket-This rain jacket for men is designed with a detachable hood and adjustable hem as well as elastic cuffs to seal off any openings where air may come in.',
  'Anti-SCRATCH & WEAR RESISTANT -- The Ski coats shell is made of the polymer blending material. The strong textile fiber fabric shell, which can reduce the risk of accidental injury, avoids being scratched by rocks and branches and at the same time protects your body.',
  'MUTI-POCKET: The snow jacket for men with 2 zip-secured hand pockets, 1 zippered inner pocket and inner big pocket, and 1 waterproof chest zipper pocket. this winter jacket lets you conveniently bring your keys, wallet, and phone when you do outdoor sports.'
],
price: 42.99,
category: 'fashion',
rating: 5
)


jacket4.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/jacket2.jpg'), filename: 'jacket2.jpg')


