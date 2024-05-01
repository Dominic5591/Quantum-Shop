puts "Creating Home"





towel = Product.create(
name: 'kimteny 12 Pack Kitchen Cloth Dish Towels, Premium Dishcloths, Super Absorbent Coral Velvet Dishtowels, Nonstick Oil Washable Fast Drying (Green-Grey)',
description: [
  'FEATURE - Size: 28x16cm/11.02x6.30inches; Material: Coral Velvet; Package: 12 Pack Kitchen towels. The 12-pack provides you an ample microfiber cleaning cloths towels for all your household needs in daily life!',
  'ULTRA ABSORBENT - These dishtowels are made of high quality coral velvet thickening material, they are lightweight, super absorbent and dry quickly. The kimteny classic kitchen towels are lint-free and absorb fluids quickly and efficiently for any tasks.',
  'MACHINE WASHABLE - Easily to be washed. They are washable for both hand and machine. The dish drying towels maintain an excellent quality even after multiple washes! Will resist shrinking and minimize lint. You could use these dish towels over and over again!',
  'COUNTLESS USES - Due to being highly absorbent, these microfiber dish towels are great for dust cloths, drying hands, wiping stains, cleaning windows, as well as cheese strainers, salad spinners, a wide variety of household chores. As good as having a magic wand in your hands! Get the job done quickly in a right way with our dish cloths!'
],
price: 12.99,
category: 'home',
rating: 4
)

towel.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/towel.jpg'), filename: 'towel.jpg')

air = Product.create(
name: 'VEWIOR Air Purifiers for Home, HEPA Air Purifiers for Large Room up to 600 sq.ft, H13 True HEPA Air Filter with Fragrance Sponge 6 Timers Quiet Air Cleaner for Pets Dander Odor Dust Smoke Pollen',
description: [
  'Efficient Purification: Air filter consists of pre-filter, HEPA filter, and activated carbon filter, which can effectively purify air pollutants such as smoke, PM 2.5, VOC, pollen, pet dander, etc. Help you improve air quality and care for the respiratory health of your family.',
  'PM2.5 Detection: Visualize air quality. VEWIOR air purifiers use the latest technology built-in chip can detect the change of air quality around the air purifier in real time. The lower the value, the better the air quality.',
  '4 Purification Modes: Home air purifier has 1-2-3 gear and sleep mode. The higher the level, the greater the purification wind speed and the faster the purification speed. Sleep mode is very quiet and the display will turn off, so you can enjoy fresh air as you sleep sweetly.',
  'Filter Reminder: New function! When the filter has reached the end of its service life, "FILTER" will light up red and remind you that it needs to be replaced. You just need to press and hold the "FILTER" button for 3-5 seconds, and the red reminder will disappear. Please use the official "VEWIOR" Filter to get the best purification.'
],
price: 49.99,
category: 'home',
rating: 3
)

air.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/air.jpg'), filename: 'air.jpg')


lamp = Product.create(
name: 'Mydethun 3D Moon Lamp with 5.9 Inch Wooden Base - LED Night Light, Mood Lighting with Touch Control Brightness for Home Décor',
description: [
  '3D Printed Moon Lamp: Create a relaxing atmosphere at home with the hyper-realistic moon lamp from Mydethun. Its moon-like surface is designed using 3D printed technology and is based on astronomical data provided by NASA.',
  'Perfect Home Decor Gift: The cute moon decor lamp is a charming gift for birthdays, baby showers, Valentines Day, Christmas, New Year, Halloween, Home, Bedroom, Kids, Women, and Couples. It is made by PLA materials and comes in a simple and beautiful box packaging',
  'Lifelike Moon on a Wooden Base: The lamp rests on a graceful wooden base and adds an aesthetic vibe to your room decor. The bottom of the night light is thoughtfully designed to retain the shape of the moon as much as possible.',
  'Dual-Color Lamp with Adjustable Brightness: The LED moon lamp allows you to easily change the color of the light from lunar white to warm yellow with a simple tap on the mini touch switch at the bottom. You can also long tap to adjust the brightness and create a cozy to cool ambience'
],
price: 21.99,
category: 'home',
rating: 2
)

lamp.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/lamp.jpg'), filename: 'lamp.jpg')


coaster = Product.create(
name: 'ME.FAN Silicone Coasters [6 Pack] Coasters with Holder - Drinking Coasters - Cup Mat for Drinks - Live for Hot or Cold Drink Thickened, Non-Slip, Non-stick, Deep Tray Black',
description: [
  'NEW THICKENED & DEEP TRAY DESIGN: The thickening coasters thickness is [ 0.28''/ 7mm], will prevent any burns or freezing, at the same time, the deep hem design can hold more overflow of water, juice and liquor from the cup. [ Diameter: 3.9''/ 10cm. ] Big size suits all normal cups or mugs, also enough for large mason jars, flask, tumbler or glassware like beer stein, bourbon glass, cola bottle and pitcher jug.',
  'NON-SLIP BOTTEM & NON-STICK TOP: Double-sided design, available on both sides. Grooved pattern holds liquid to prevent leaking, raised ripple promote air flow to prevent coaster from sticking to glassware. Relax and enjoy fun time with your family or friends at your house, indoor or outdoor; anywhere from the kitchen, bedroom, drawing room, ball room, wedding, party, library, restaurant, office, bar, pub and beach.',
  'MAXIMIZE FURNITURE PROTECTION: The indoor and outdoor patio absorbent coasters, can be used on any materials table type, like wood, granite, glass, bamboo plastic, soapstone, sandstone, marble, stone tables and so on. Smart protect the surface of your kitchen counter tabletop, office desk or bedside furniture from nasty marks or scary scratch.',
  'LONG-TERM USE & HEAT RESISTANT & DISHWASHER AVAILABLE: The drink coasters are made of food grade silicone,Flexible & Durable. Heat resistant range from -40F to 480F, can be used for cold or hot drinks in any occasion. enjoy your favorite alcohol, liquor, fruit juice or other beverage, like beer, wine, whiskey, tropical cocktail, ice water, coke soft drink, coffee, tea or hot chocolate.'
],
price: 9.99,
category: 'home',
rating: 4
)

coaster.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/coaster.jpg'), filename: 'coaster.jpg')


cutting = Product.create(
name: 'KIMIUP Kitchen Cutting Board (Set of 3),Professional Chopping Boards Sets,Dishwasher Safe Cutting Boards With Juice Grooves & Carrying Handle & No BPA',
description: [
  'A High quality Kitchen Cutting Boar KIMIUP Kitchen Cutting Board is made from non porous plastic that ultra durable and highly resistant to heat.The plastic cutting boards for kitchen contain no BPA,it is safety for your family to use this Kitchen Cutting Board (Set of 3).',
  'Three Sizes for Your Cutting Needs KIMIUP Kitchen Cutting Board (Set of 3)come with three sizes: Large(15.6"x9.4"), Medium(12.4"x7.8"), Small(9.6"x5.7").The thickness of them are 0.35".All of them are safety and easy to use.Three Sizes Kitchen Cutting Board almost fit for all your Cutting needs.',
  'Fashion Design with Marble Pattern KIMIUP Kitchen Cutting Board used fashion design with marble pattern.Compared with other conventional cutting board,our Professional Chopping Boards Set is in the line with the current fashion trend.It makes your kitchen more beautiful.',
  'Juice Grooves & Non slip mat KIMIUP Professional Chopping Boards Sets design with Juice Grooves.To avoid the juice will run everywhere in your Kitchen when you are cutting fruit or meat.At the same time,we designed non-slip mats on the four corners to ensure your safety.',
  'Carrying Handle KIMIUP Kitchen Cutting Board design with Carrying Handle.Compared with solid bamboo cutting boards and wooden cutting boards on the market,it is more convenient to store and take.Our cutting board kits can be washed by hand with water or thrown in the dishwasher for machine washing.'
],
price: 14.99,
category: 'home',
rating: 5
)

cutting.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/cutting.jpg'), filename: 'cutting')


silverware = Product.create(
name: '24-Piece Black Silverware Set with Steak Knives, Black Flatware Set for 4, Food-Grade Stainless Steel Tableware Cutlery Set, Mirror Finished Utensil Sets for Home Restaurant',
description: [
  'PREMIUM 24-PIECE BLACK SILVERWARE SET FOR 4: This flatware set contains 4 dinner forks, 4 salad forks, 4 dinner spoons, 4 dessert spoons, 4 dinner knives and 4 steak knives. Its the ideal set for home daily use, and also for restaurants, pubs, cafes, and hotels. This cutlery set also help your dinner full of design while having a party.',
  '4 STEAK KNIVES INCLUDED: 4 additional steak knives are offered in this pack that are also made of stainless steel with sharp serrations on the blades help it easy to cut meat, and being ideal to use for eating. The triple riveting handle is strong and durable even when cut hard, and the ergonomic design makes it very comfortable to hold.',
  'USE AND MAINTENANCE: Recommend hand wash first, storage them after drying. Wire brush, hard sponge, cleaning cloth or any other hard material are not recommend , it will damage the silver.',
  'COMFORTABLE DESIGN: This flatware set has a classic silhouette with clean lines and polish-finish surface in all black, a good choice to go with your existing tableware. The smooth edge of the handle is pleasure to hold, appropriate weight and perfect balance are added to ensure maximum comfort during use.',
  'HIGH-QUALITY STAINLESS STEEL: Made of premium food-grade stainless steel, providing the longest term value and the best properties, it offers nice resistance to rust and corrosion to get the most sturdy and healthy experience while using, never bend in daily use.'
],
price: 19.99,
category: 'home',
rating: 3
)

silverware.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/silverware.jpg'), filename: 'silverware.jpg')


scale = Product.create(
name: 'Scale for Body Weight, Bveiugn Digital Bathroom Smart Scale LED Display, 13 Body Composition Analyzer Sync Weight Scale BMI Health Monitor Sync Apps 400lbs - Black',
description: [
  'Keep Tracking Changes with a Glance - Always keep an eye on your body to help you reach your goal. The Fitdays app provides detailed charts and saves historical data to track the changes of your body composition over days, weeks, months or even years. Reach your goals with Bveiugn scales for body weight.',
  '13 Essential Body Composition - The smart scale not only shows weight but also BMI, body fat, subcutaneous fat, body water, protein, BMR, body age etc., by electrical Bio-Impedance Measurement Technology. The data will sync to the app when your phone and scale connect successfully. It makes you know more data clearly about your body in time and track progress easily on your phone.',
  'High Accurate Scale - equipped with 4 high precision sensors and 4 good sensitive electrodes, with advanced technology to ensure your accurate readings with division at 0.2lb/100g, up to maximum capacity 400lb/180kg in 0.1 lb/0.05kg increments. With low power / overload indication, step-on technology and 2xAAA batteries included.',
  'Sync with Health Apps - Free download FITDAYS app on IOS and Android, and FITDAYS app can easily sync with other fitness Apps like Apple Health, Google Fit, Samsung Health, Fitbit and so on, which let you store and share your data more conveniently. Fitdays App allows you to create unlimited profiles 24 Users for your family and friends with only one smart scale. It is very helpful and convenient for those who keep fit and do health sports for improvement goal.'
],
price: 25.99,
category: 'home',
rating: 2
)


scale.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/scale.jpg'), filename: 'scale.jpg')

containers = Product.create(
name: 'Vtopmart Airtight Food Storage Containers Set with Lids, 15pcs BPA Free Plastic Dry Food Canisters for Kitchen Pantry Organization and Storage, Dishwasher safe,Include 24 Labels, Grey',
description: [
  'Help Organize Your Kitchen and Pantry----Imagine every time walking to your kitchen or pantry, found everything is neatly organized. No longer messy, you can get everything you want very quickly. With the stackable and space-saving design, these containers will make more efficient use of every inch of your kitchen pantry cabinets.',
  '4 Size Combinations Fit Your Needs----Our kitchen storage containers set comes in 4 different sizes. Includes 1 Tall Container (2.5quart/2.8 liters), 4 Large Containers (1.8quart/2.0 liters), 6 Medium Containers (1.3quart/1.4 liters), 4 Small Containers (0.7quart/0.8 liters). Perfect for storing spaghetti, baking supplies, cereal, flour, sugar, oats, pasta, rice, coffee, tea, snacks, nuts and other dry goods.',
  'Airtight Containers Keep Food Fresh----The side-locking lids with silicone gasket make these storage containers airtight, and the top flips open easily. Airtight storage system will always keep your food dry and fresh. All have the same lids make it easy to wash dry and reuse with ease.',
  'BPA Free and Food Grade Material----Vtopmart pantry storage containers are made of durable plastic, BPA free, which have a longer life than many other brands plastic containers. Clear containers make it convenient to see whats inside, you can easily get what you want without opening every container.'
],
price: 29.99,
category: 'home',
rating: 4
)

containers.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/containers.jpg'), filename: 'containers.jpg')


wood = Product.create(
name: 'Xchouxer Sofa Arm Clip Table, Armrest Tray Table, Drinks/Remote Control/Snacks Holder',
description: [
  'MAKE LIFE EASIER - easy and handy for reaching remote controls/drinks/snacks/phones, especially ideal for couch potatoes and elders with mobility difficulty',
  'USER-FRIENDLY NO ASSEMBLE REQUIRED - stress free. No tools and assemble required, simply clamp on and off with the spring loaded legs. Fits in round/square/curved arms width 4 to 9 inch. *Please measure the width of your couch armrest before placing the order*',
  'COMPACT SPACE SAVING DESIGN - no space for end table and coffee table? No worries! Xchouxer Couch Armrest Tray is "clamp-on" design, create an instant and stable side table for your coffee time in a second, an ideal replacement for huge side end table, great for households with limited space, apartment, dorm and RV',
  'MATERIAL: premium food grade plastic, easy to clean, simply clean with dish soap or damp cloth. Color: Brown',
  'MEASUREMENTS 12.3 (L) x 9 (W) x 2.5 collapse/4.5 expand (H) inch, fits couch arm width between 4 - 9 inch. When not in use, can be stored under the couch or in the drawer with the 2.5" height'
],
price: 19.99,
category: 'home',
rating: 5
)

wood.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/wood.jpg'), filename: 'wood.jpg')


broom = Product.create(
name: 'TreeLen Broom and Dustpan Set with 52" Long Handle for Home Kitchen Room Office Lobby Floor Use Upright Stand Up Stand Up Broom with Dustpan Combo',
description: [
  'Patent No:D919916, Upgrade Broom and Dustpan Measures Over 52"overall tall by 10" width,Lobby Broom steel handle is 52" long, Lobby Dust Pan steel handle is 38.5" long offer stand up Cleaning.',
  'Broom and dust pan Snaps together for easy stand-up storage, save your space and easy for moving.',
  'Lobby Dust Pan and Broom is perfect for all on-the-move applications for sweeping up and carrying debris and garbage.',
  'Built in scraper and comb/Teeth for easy to Clean Broom into Dustpan ,Clean Pet Hair and Human Hair with 1 Pull on the Teeth.',
  'Dustpan locks in open position to easily dispose of contents in the garbage can without spilling.',
  'Pefect Ideal for Indoor Outdoor Garage Kitchen Room Office Lobby Cleaning'
],
price: 8.99,
category: 'home',
rating: 5
)


broom.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/broom.jpg'), filename: 'broom.jpg')






towel2 = Product.create(
name: 'kimteny 12 Pack Kitchen Cloth Dish Towels, Premium Dishcloths, Super Absorbent Coral Velvet Dishtowels, Nonstick Oil Washable Fast Drying (Green-Grey)',
description: [
  'FEATURE - Size: 28x16cm/11.02x6.30inches; Material: Coral Velvet; Package: 12 Pack Kitchen towels. The 12-pack provides you an ample microfiber cleaning cloths towels for all your household needs in daily life!',
  'ULTRA ABSORBENT - These dishtowels are made of high quality coral velvet thickening material, they are lightweight, super absorbent and dry quickly. The kimteny classic kitchen towels are lint-free and absorb fluids quickly and efficiently for any tasks.',
  'MACHINE WASHABLE - Easily to be washed. They are washable for both hand and machine. The dish drying towels maintain an excellent quality even after multiple washes! Will resist shrinking and minimize lint. You could use these dish towels over and over again!',
  'COUNTLESS USES - Due to being highly absorbent, these microfiber dish towels are great for dust cloths, drying hands, wiping stains, cleaning windows, as well as cheese strainers, salad spinners, a wide variety of household chores. As good as having a magic wand in your hands! Get the job done quickly in a right way with our dish cloths!'
],
price: 12.99,
category: 'home',
rating: 4
)

towel2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/towel.jpg'), filename: 'towel.jpg')

air2 = Product.create(
name: 'VEWIOR Air Purifiers for Home, HEPA Air Purifiers for Large Room up to 600 sq.ft, H13 True HEPA Air Filter with Fragrance Sponge 6 Timers Quiet Air Cleaner for Pets Dander Odor Dust Smoke Pollen',
description: [
  'Efficient Purification: Air filter consists of pre-filter, HEPA filter, and activated carbon filter, which can effectively purify air pollutants such as smoke, PM 2.5, VOC, pollen, pet dander, etc. Help you improve air quality and care for the respiratory health of your family.',
  'PM2.5 Detection: Visualize air quality. VEWIOR air purifiers use the latest technology built-in chip can detect the change of air quality around the air purifier in real time. The lower the value, the better the air quality.',
  '4 Purification Modes: Home air purifier has 1-2-3 gear and sleep mode. The higher the level, the greater the purification wind speed and the faster the purification speed. Sleep mode is very quiet and the display will turn off, so you can enjoy fresh air as you sleep sweetly.',
  'Filter Reminder: New function! When the filter has reached the end of its service life, "FILTER" will light up red and remind you that it needs to be replaced. You just need to press and hold the "FILTER" button for 3-5 seconds, and the red reminder will disappear. Please use the official "VEWIOR" Filter to get the best purification.'
],
price: 49.99,
category: 'home',
rating: 3
)

air2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/air.jpg'), filename: 'air.jpg')


lamp2 = Product.create(
name: 'Mydethun 3D Moon Lamp with 5.9 Inch Wooden Base - LED Night Light, Mood Lighting with Touch Control Brightness for Home Décor',
description: [
  '3D Printed Moon Lamp: Create a relaxing atmosphere at home with the hyper-realistic moon lamp from Mydethun. Its moon-like surface is designed using 3D printed technology and is based on astronomical data provided by NASA.',
  'Perfect Home Decor Gift: The cute moon decor lamp is a charming gift for birthdays, baby showers, Valentines Day, Christmas, New Year, Halloween, Home, Bedroom, Kids, Women, and Couples. It is made by PLA materials and comes in a simple and beautiful box packaging',
  'Lifelike Moon on a Wooden Base: The lamp rests on a graceful wooden base and adds an aesthetic vibe to your room decor. The bottom of the night light is thoughtfully designed to retain the shape of the moon as much as possible.',
  'Dual-Color Lamp with Adjustable Brightness: The LED moon lamp allows you to easily change the color of the light from lunar white to warm yellow with a simple tap on the mini touch switch at the bottom. You can also long tap to adjust the brightness and create a cozy to cool ambience'
],
price: 21.99,
category: 'home',
rating: 2
)

lamp2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/lamp.jpg'), filename: 'lamp.jpg')


coaster2 = Product.create(
name: 'ME.FAN Silicone Coasters [6 Pack] Coasters with Holder - Drinking Coasters - Cup Mat for Drinks - Live for Hot or Cold Drink Thickened, Non-Slip, Non-stick, Deep Tray Black',
description: [
  'NEW THICKENED & DEEP TRAY DESIGN: The thickening coasters thickness is [ 0.28''/ 7mm], will prevent any burns or freezing, at the same time, the deep hem design can hold more overflow of water, juice and liquor from the cup. [ Diameter: 3.9''/ 10cm. ] Big size suits all normal cups or mugs, also enough for large mason jars, flask, tumbler or glassware like beer stein, bourbon glass, cola bottle and pitcher jug.',
  'NON-SLIP BOTTEM & NON-STICK TOP: Double-sided design, available on both sides. Grooved pattern holds liquid to prevent leaking, raised ripple promote air flow to prevent coaster from sticking to glassware. Relax and enjoy fun time with your family or friends at your house, indoor or outdoor; anywhere from the kitchen, bedroom, drawing room, ball room, wedding, party, library, restaurant, office, bar, pub and beach.',
  'MAXIMIZE FURNITURE PROTECTION: The indoor and outdoor patio absorbent coasters, can be used on any materials table type, like wood, granite, glass, bamboo plastic, soapstone, sandstone, marble, stone tables and so on. Smart protect the surface of your kitchen counter tabletop, office desk or bedside furniture from nasty marks or scary scratch.',
  'LONG-TERM USE & HEAT RESISTANT & DISHWASHER AVAILABLE: The drink coasters are made of food grade silicone,Flexible & Durable. Heat resistant range from -40F to 480F, can be used for cold or hot drinks in any occasion. enjoy your favorite alcohol, liquor, fruit juice or other beverage, like beer, wine, whiskey, tropical cocktail, ice water, coke soft drink, coffee, tea or hot chocolate.'
],
price: 9.99,
category: 'home',
rating: 4
)

coaster2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/coaster.jpg'), filename: 'coaster.jpg')


cutting2 = Product.create(
name: 'KIMIUP Kitchen Cutting Board (Set of 3),Professional Chopping Boards Sets,Dishwasher Safe Cutting Boards With Juice Grooves & Carrying Handle & No BPA',
description: [
  'A High quality Kitchen Cutting Boar KIMIUP Kitchen Cutting Board is made from non porous plastic that ultra durable and highly resistant to heat.The plastic cutting boards for kitchen contain no BPA,it is safety for your family to use this Kitchen Cutting Board (Set of 3).',
  'Three Sizes for Your Cutting Needs KIMIUP Kitchen Cutting Board (Set of 3)come with three sizes: Large(15.6"x9.4"), Medium(12.4"x7.8"), Small(9.6"x5.7").The thickness of them are 0.35".All of them are safety and easy to use.Three Sizes Kitchen Cutting Board almost fit for all your Cutting needs.',
  'Fashion Design with Marble Pattern KIMIUP Kitchen Cutting Board used fashion design with marble pattern.Compared with other conventional cutting board,our Professional Chopping Boards Set is in the line with the current fashion trend.It makes your kitchen more beautiful.',
  'Juice Grooves & Non slip mat KIMIUP Professional Chopping Boards Sets design with Juice Grooves.To avoid the juice will run everywhere in your Kitchen when you are cutting fruit or meat.At the same time,we designed non-slip mats on the four corners to ensure your safety.',
  'Carrying Handle KIMIUP Kitchen Cutting Board design with Carrying Handle.Compared with solid bamboo cutting boards and wooden cutting boards on the market,it is more convenient to store and take.Our cutting board kits can be washed by hand with water or thrown in the dishwasher for machine washing.'
],
price: 14.99,
category: 'home',
rating: 5
)

cutting2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/cutting.jpg'), filename: 'cutting')


silverware2 = Product.create(
name: '24-Piece Black Silverware Set with Steak Knives, Black Flatware Set for 4, Food-Grade Stainless Steel Tableware Cutlery Set, Mirror Finished Utensil Sets for Home Restaurant',
description: [
  'PREMIUM 24-PIECE BLACK SILVERWARE SET FOR 4: This flatware set contains 4 dinner forks, 4 salad forks, 4 dinner spoons, 4 dessert spoons, 4 dinner knives and 4 steak knives. Its the ideal set for home daily use, and also for restaurants, pubs, cafes, and hotels. This cutlery set also help your dinner full of design while having a party.',
  '4 STEAK KNIVES INCLUDED: 4 additional steak knives are offered in this pack that are also made of stainless steel with sharp serrations on the blades help it easy to cut meat, and being ideal to use for eating. The triple riveting handle is strong and durable even when cut hard, and the ergonomic design makes it very comfortable to hold.',
  'USE AND MAINTENANCE: Recommend hand wash first, storage them after drying. Wire brush, hard sponge, cleaning cloth or any other hard material are not recommend , it will damage the silver.',
  'COMFORTABLE DESIGN: This flatware set has a classic silhouette with clean lines and polish-finish surface in all black, a good choice to go with your existing tableware. The smooth edge of the handle is pleasure to hold, appropriate weight and perfect balance are added to ensure maximum comfort during use.',
  'HIGH-QUALITY STAINLESS STEEL: Made of premium food-grade stainless steel, providing the longest term value and the best properties, it offers nice resistance to rust and corrosion to get the most sturdy and healthy experience while using, never bend in daily use.'
],
price: 19.99,
category: 'home',
rating: 3
)

silverware2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/silverware.jpg'), filename: 'silverware.jpg')


scale2 = Product.create(
name: 'Scale for Body Weight, Bveiugn Digital Bathroom Smart Scale LED Display, 13 Body Composition Analyzer Sync Weight Scale BMI Health Monitor Sync Apps 400lbs - Black',
description: [
  'Keep Tracking Changes with a Glance - Always keep an eye on your body to help you reach your goal. The Fitdays app provides detailed charts and saves historical data to track the changes of your body composition over days, weeks, months or even years. Reach your goals with Bveiugn scales for body weight.',
  '13 Essential Body Composition - The smart scale not only shows weight but also BMI, body fat, subcutaneous fat, body water, protein, BMR, body age etc., by electrical Bio-Impedance Measurement Technology. The data will sync to the app when your phone and scale connect successfully. It makes you know more data clearly about your body in time and track progress easily on your phone.',
  'High Accurate Scale - equipped with 4 high precision sensors and 4 good sensitive electrodes, with advanced technology to ensure your accurate readings with division at 0.2lb/100g, up to maximum capacity 400lb/180kg in 0.1 lb/0.05kg increments. With low power / overload indication, step-on technology and 2xAAA batteries included.',
  'Sync with Health Apps - Free download FITDAYS app on IOS and Android, and FITDAYS app can easily sync with other fitness Apps like Apple Health, Google Fit, Samsung Health, Fitbit and so on, which let you store and share your data more conveniently. Fitdays App allows you to create unlimited profiles 24 Users for your family and friends with only one smart scale. It is very helpful and convenient for those who keep fit and do health sports for improvement goal.'
],
price: 25.99,
category: 'home',
rating: 2
)


scale2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/scale.jpg'), filename: 'scale.jpg')

containers2 = Product.create(
name: 'Vtopmart Airtight Food Storage Containers Set with Lids, 15pcs BPA Free Plastic Dry Food Canisters for Kitchen Pantry Organization and Storage, Dishwasher safe,Include 24 Labels, Grey',
description: [
  'Help Organize Your Kitchen and Pantry----Imagine every time walking to your kitchen or pantry, found everything is neatly organized. No longer messy, you can get everything you want very quickly. With the stackable and space-saving design, these containers will make more efficient use of every inch of your kitchen pantry cabinets.',
  '4 Size Combinations Fit Your Needs----Our kitchen storage containers set comes in 4 different sizes. Includes 1 Tall Container (2.5quart/2.8 liters), 4 Large Containers (1.8quart/2.0 liters), 6 Medium Containers (1.3quart/1.4 liters), 4 Small Containers (0.7quart/0.8 liters). Perfect for storing spaghetti, baking supplies, cereal, flour, sugar, oats, pasta, rice, coffee, tea, snacks, nuts and other dry goods.',
  'Airtight Containers Keep Food Fresh----The side-locking lids with silicone gasket make these storage containers airtight, and the top flips open easily. Airtight storage system will always keep your food dry and fresh. All have the same lids make it easy to wash dry and reuse with ease.',
  'BPA Free and Food Grade Material----Vtopmart pantry storage containers are made of durable plastic, BPA free, which have a longer life than many other brands plastic containers. Clear containers make it convenient to see whats inside, you can easily get what you want without opening every container.'
],
price: 29.99,
category: 'home',
rating: 4
)

containers2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/containers.jpg'), filename: 'containers.jpg')


wood2 = Product.create(
name: 'Xchouxer Sofa Arm Clip Table, Armrest Tray Table, Drinks/Remote Control/Snacks Holder',
description: [
  'MAKE LIFE EASIER - easy and handy for reaching remote controls/drinks/snacks/phones, especially ideal for couch potatoes and elders with mobility difficulty',
  'USER-FRIENDLY NO ASSEMBLE REQUIRED - stress free. No tools and assemble required, simply clamp on and off with the spring loaded legs. Fits in round/square/curved arms width 4 to 9 inch. *Please measure the width of your couch armrest before placing the order*',
  'COMPACT SPACE SAVING DESIGN - no space for end table and coffee table? No worries! Xchouxer Couch Armrest Tray is "clamp-on" design, create an instant and stable side table for your coffee time in a second, an ideal replacement for huge side end table, great for households with limited space, apartment, dorm and RV',
  'MATERIAL: premium food grade plastic, easy to clean, simply clean with dish soap or damp cloth. Color: Brown',
  'MEASUREMENTS 12.3 (L) x 9 (W) x 2.5 collapse/4.5 expand (H) inch, fits couch arm width between 4 - 9 inch. When not in use, can be stored under the couch or in the drawer with the 2.5" height'
],
price: 19.99,
category: 'home',
rating: 5
)

wood2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/wood.jpg'), filename: 'wood.jpg')


broom2 = Product.create(
name: 'TreeLen Broom and Dustpan Set with 52" Long Handle for Home Kitchen Room Office Lobby Floor Use Upright Stand Up Stand Up Broom with Dustpan Combo',
description: [
  'Patent No:D919916, Upgrade Broom and Dustpan Measures Over 52"overall tall by 10" width,Lobby Broom steel handle is 52" long, Lobby Dust Pan steel handle is 38.5" long offer stand up Cleaning.',
  'Broom and dust pan Snaps together for easy stand-up storage, save your space and easy for moving.',
  'Lobby Dust Pan and Broom is perfect for all on-the-move applications for sweeping up and carrying debris and garbage.',
  'Built in scraper and comb/Teeth for easy to Clean Broom into Dustpan ,Clean Pet Hair and Human Hair with 1 Pull on the Teeth.',
  'Dustpan locks in open position to easily dispose of contents in the garbage can without spilling.',
  'Pefect Ideal for Indoor Outdoor Garage Kitchen Room Office Lobby Cleaning'
],
price: 8.99,
category: 'home',
rating: 5
)


broom2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/broom.jpg'), filename: 'broom.jpg')




