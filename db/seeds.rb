# ApplicationRecord.transaction do 

require 'open-uri'

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
Order_Item.destroy_all
Order.destroy_all
User.destroy_all
Product.destroy_all


puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!('orders')
ApplicationRecord.connection.reset_pk_sequence!('order_items')
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')

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







############################ Electronics:




keyboard = Product.create(
name: 'Razer Huntsman Mini 60% Gaming Keyboard: Fast Keyboard Switches - Clicky Optical Switches - Chroma RGB Lighting - PBT Keycaps - Onboard Memory - Classic Black',
description: [
  'Faster Than Legacy Mechanical Switches: Razer Optical switches use light-based actuation, registering key presses at the speed of light (30% shorter actuation distance than other clicky switches at 1.5 millimeter) with satisfying, clicky feedback',
  'Ultimate Personalization and Gaming Immersion with Razer Chroma: Fully syncs with popular games, Razer hardware, Philips Hue, and gear from 30 partners; supports 16.8 million colors on individually backlit keys',
  'Quality, Aluminum Construction: Covered with a matte, aluminum top frame for increased structural integrity',
  'Sleek design that enhances any living space.',
  'Oil-Resistant Doubleshot PBT Keycaps: Made of textured, high-grade PBT for a more durable and textured finish less prone to long-term grime buildup',
  'Fully Programmable Macros: Razer Hypershift allows for all keys and keypress combinations to be remapped to execute complex commands'
],
price: 99.99,
category: 'electronics',
rating: 4
)


# product.photos.attach(io: URI.open('your_photo_url.jpg'), filename: 'your_photo_filename.jpg')
keyboard.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/keyboard.jpg'), filename: 'keyboard.jpg')


monitor = Product.create(
name: 'SAMSUNG 32" Odyssey G65B QHD 240Hz 1ms (GTG) HDR 600 Gaming Hub 1000R Curved Gaming Monitor,Black',
description: [
  'QHD RESOLUTION: Your gaming world will be more life like than ever before. Packing in 1.7 times the pixel density of Full HD, QHD resolution boasts incrediblydetailed, pin-sharp images. Experience a fuller view with more space to take in all the action..Operating Temperature : 10~40 ℃',
  'DISPLAY HDR 600: Reveal the whole picture. DisplayHDR 600 delivers more contrast, with deeper blacks and brighter whites to help you uncover enemies orsecrets lurking in the shadows. Even in dark scenes, every detail shines with clarity.',
  '240Hz REFRESH RATE & 1MS RESPONSE TIME: Speed through scenes. 240Hz refresh rate eliminates lag for exhilarating gameplay withultra-smooth action. Jump on enemies right when you see them with a 1ms response time and blur-free frames.',
  'AMD FREESYNC PREMIUM PRO: Effortlessly smooth game play. AMD FreeSync Premium Pro features adaptive sync technology which reduces screen tearing, stutter, and inputlatency. Low frame rate compensation ensures every scene flows seamlessly.'
],
price: 488.99,
category: 'electronics',
rating: 5
)

monitor.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/monitor.jpg'), filename: 'monitor.jpg')

tv = Product.create(
name: 'VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model',
description: [
  '1080p High-Definition - Watch TV in crisp, clear 1080p Full HD resolution and experience a brilliant picture with the VIZIO D-Series..Voltage : 120V.Viewable Area : 39.5''. Standby Power : <0.5W',
  'Full Array LED Backlight - Evenly distributed LEDs across the screens backlight deliver superior light uniformity and picture performance.',
  'Comfortable fit with noise isolation technology.',
  'IQ Picture Processor - Delivers superior picture processing, faster navigation, and quicker load times to get to your favorite content faster.',
  'V-Gaming Engine Automatically optimizes picture mode for gaming and makes next-gen console gameplay more responsive with Auto Game Mode, Variable Refresh Rate with AMD Freesync, D-Series lowest input lag, and newly added gaming menu.'
],
price: 168.99,
category: 'electronics',
rating: 4
)


tv.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/vizio-tv.jpg'), filename: 'vizio-tv.jpg')


ssd = Product.create(
name: 'Western Digital WD_BLACK 1TB SN770 NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 5,150 MB/s - WDS100T3X0E',
description: [
  'Get into the game fast as you zoom past load times with blazing speeds of up to 5,150MB/s(1) (1TB and 2TB models)..date transfer rate:5150.0 megabytes_per_second.Sequential Write Performance : 4900MB/s',
  'Equipped with a PCIe Gen4 interface(4), the WD_BLACK SN770 NVMe SSD helps fuel in-game responsiveness, minimize stutter, and provide smooth streaming for a performance boost you can see and feel.',
  'Get tons of space for your latest games, future updates, and downloadable content with capacities up to 2TB(2).',
  'Supports future games developed for Microsofts DirectStorage technology for faster load times.',
  'Optimize peak performance in gaming mode and monitor your drives health with the WD_BLACK Dashboard (Windows only) so you can game with confidence using this reliable drive from a trusted brand.'
],
price: 64.99,
category: 'electronics',
rating: 5
)


ssd.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/ssdm2.jpg'), filename: 'ssdm2.jpg')


mouse = Product.create(
name: 'Corsair Dark Core RGB Pro, Wireless FPS/MOBA Gaming optical Mouse with SLIPSTREAM Technology, Black, Backlit RGB LED, 18000 DPI, Optical,CH-9315411-NA',
description: [
  'Three ways to connect: sub-1ms SLIPSTREAM WIRELESS technology, low-latency Bluetooth wireless technology, or USB wired.',
  'Play with pinpoint accuracy and precision thanks to a custom PixArt PAW3392 native 18,000 DPI optical sensor, optimized for wireless mice with extremely low power consumption and customizable in 1 DPI resolution steps.',
  'Hyper-polling technology communicates with your PC at up to 2,000Hz, twice the speed of standard gaming mice, ensuring blazingly fast response times.',
  'Charges with an easy-to-use, reversible USB-C connector. Mouse button Type: Omron',
  'Comfortable contoured shape with two included interchangeable side grips for a tailored fit.'
],
price: 89.99,
category: 'electronics',
rating: 4
)



mouse.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/mouse.jpg'), filename: 'mouse.jpg')


laptop = Product.create(
name: 'Acer Predator Helios 16 Gaming Laptop | 13th Gen Intel Core i7-13700HX | NVIDIA GeForce RTX 4060 | 16" 2560 x 1600 165Hz G-SYNC Display | 16GB DDR5 | 1TB Gen 4 SSD | Killer Wi-Fi 6E | PH16-71-74UU',
description: [
  'Do What You Do With Superior Performance: The 13th Gen Intel Core i7-13700HX processor goes beyond performance to let your PC do even more at once. With a first-of-its-kind design, you get the performance you need to play, record and stream games with high FPS and effortlessly switch to heavy multitasking workloads like video, music, and photo editing.',
  'Beyond Fast: Feel the power emanating from within the neon-hued shell of the Helios 16. The NVIDIA GeForce RTX 4060 Laptop GPU is beyond fast for gamers and creators. Theyre powered by the ultra-efficient NVIDIA Ada Lovelace architecture which delivers a quantum leap in both performance and AI-powered graphics.',
  'Trust Your Eyes: At 16 inches with a 16:10 aspect ratio, the pristine WQXGA LED panel clocks in with a fast 165Hz refresh and 3ms Overdrive response time. Alongside the suite of features from NVIDIA G-SYNC and NVIDIA Advanced Optimus, youre guaranteed that games, movies, and whatevers on-screen all benefit from extreme levels of performance.',
  'Start Your Engines: This Predator Helios 16 laptop will take your game library, place it in front of you, and dare you to give it a challenge. Not only does Helios look good while dishing out frame after frame, but this RTX-empowered machine is fully optimized for maximum 140W MGP usage, so you always have two things: Full Power.',
  'NVIDIA Advanced Optimus: NVIDIA Advanced Optimus is NVIDIAs graphics switching technology, which allows a laptop display to dynamically switch between the integrated graphics (inside the processor) and the discrete graphics (the Nvidia GPU) without having to reboot.'
],
price: 1279.99,
category: 'electronics',
rating: 3
)

laptop.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/laptop.jpg'), filename: 'laptop.jpg')

power = Product.create(
name: 'Thermaltake Toughpower GX3 850W 80Plus Gold SLI/Crossfire Ready ATX 3.0 Power Supply; PCIe5 12VHPWR Connector Included; 5 Year Warranty; PS-TPD-0850NNFAGU-3',
description: [
  'Power Up the Next Generation Hardware with PCIe Gen. 5 ready GX3 850W',
  'Fully Compatible with Intel ATX 3.0 Standards',
  'Ultra Quiet 120mm Fluid Dynamic Bearing Fan',
  '80 PLUS Gold Certified and C6/C7 States Ready'
],
price: 84.99,
category: 'electronics',
rating: 2
)

power.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/powersupply.jpg'), filename: 'powersupply.jpg')

ram = Product.create(
name: 'Corsair VENGEANCE LPX DDR4 RAM 32GB (2x16GB) 3200MHz CL16 Intel XMP 2.0 Computer Memory - Black (CMK32GX4M2E3200C16)',
description: [
  'Hand-sorted memory chips ensure high performance with generous overclocking headroom',
  'VENGEANCE LPX is optimized for wide compatibility with the latest Intel and AMD DDR4 motherboards',
  'A low-profile height of just 34mm ensures that VENGEANCE LPX even fits in most small-form-factor builds',
  'A solid aluminum heatspreader efficiently dissipates heat from each module so that they consistently run at high clock speeds',
  'Supports Intel XMP 2.0 for simple one-setting installation and setup',
  'Available in multiple colors to match the style of your system'
],
price: 77.99,
category: 'electronics',
rating: 5
)

ram.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/ram.jpg'), filename: 'ram.jpg')

headphones = Product.create(
name: 'Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New',
description: [
  'Sonys lightest Wireless Noise-canceling headband ever.Specific uses for product : Entertainment',
  'Take noise canceling to the next level with Sonys Integrated Processor V1, so you can fully immerse yourself in the music.',
  'Super comfortable and lightweight design.',
  'Adjustable Ambient Sound mode and Adaptive Sound control features tailors sound to suit the environment around you',
  'Up to 35-hour battery life with quick charging (3 min charge for up to 1 hour of playback).',
  'High sound quality and well-balanced sound tuning.'
],
price: 148.99,
category: 'electronics',    
rating: 5
)

headphones.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/headphones.jpg'), filename: 'headphones.jpg')

pad = Product.create(
name: 'Novation Launchpad X Grid Controller for Ableton Live',
description: [
  'Take Control of Your Performance Essential performance controls are a single button-press away: stop, solo, mute, record arm and set your levels, pans and sends. Using Launchpad X is a simple as it gets, no drivers to install, just plug and perform.',
  'Dynamic and expressive playing Large RGB velocity- and pressure-sensitive pads give you a perfect reflection of your Ableton Live or Logic Pro session, matching colours from the session window to your Launchpad Pro, making it easier than ever to see your clips and play your instruments dynamically and expressively.',
  'Our Deepest Ableton Live Integration Quickly launch clips and scenes, access mixer, device and transport controls, and quantise, duplicate and double, all without touching your mouse — making it easier and more tactile to control your performances. Capture MIDI makes sure you never miss an idea so you keep in the creative flow.',
  'Make It Yours with Four Custom Modes Go deeper and get Launchpad X working the way you want. Use Novation Components to customise MIDI mappings, and control almost anything; four custom modes mean you can design how this essential grid controller works for you.'
],
price: 149.99,
category: 'electronics',
rating: 4
)

pad.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/launchpad.jpg'), filename: 'launchpad.jpg')




############################ fashion





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





########################### home





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





########################### books





book1 = Product.create(
name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
description: [
  'The #1 New York Times bestseller. Over 15 million copies sold!',
  'No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the worlds leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
  'If youre having trouble changing your habits, the problem isnt you. The problem is your system. Bad habits repeat themselves again and again not because you dont want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, youll get a proven system that can take you to new heights.'
],
price: 18.99,
category: 'books',
rating: 4
)

book1.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book1.jpg'), filename: 'book1.jpg')



book2 = Product.create(
name: 'The 48 Laws of Power',
description: [
  'Amoral, cunning, ruthless, and instructive, this multi-million-copy New York Times bestseller is the definitive manual for anyone interested in gaining, observing, or defending against ultimate control from the author of The Laws of Human Nature.',
  'In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.'
],
price: 14.99,
category: 'books',
rating: 2
)

book2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book2.jpg'), filename: 'book2.jpg')

book3 = Product.create(
name: 'True Hallucinations: Being an Account of the Authors Extraordinary Adventures in the Devils Paradise',
description: [
  'This mesmerizing, surreal account of the bizarre adventures of Terence McKenna, his brother Dennis, and a small band of their friends, is a wild ride of exotic experience and scientific inquiry. Exploring the Amazon Basin in search of mythical shamanic hallucinogens, they encounter a host of unusual characters -- including a mushroom, a flying saucer, pirate Mantids from outer space, an appearance by James and Nora Joyce in the guise of poultry, and translinguistic matter -- and discover the missing link in the development of human consciousness and language.'
],
price: 13.99,
category: 'books',
rating: 5
)

book3.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book3.jpg'), filename: 'book3.jpg')

book4 = Product.create(
name: 'A Happy Death',
description: [
  'The first novel from the Nobel Prize-winning author lays the foundation for The Stranger, telling the story of an Algerian clerk who kills a man in cold blood. ',
  'In A Happy Death, written when Albert Camus was in his early twenties and retrieved from his private papers following his death in 1960, revealed himself to an extent that he never would in his later fiction. For if A Happy Death is the study of a rule-bound being shattering the fetters of his existence, it is also a remarkably candid portrait of its author as a young man.',
  'As the novel follows the protagonist, Patrice Mersault, to his victims house -- and then, fleeing, in a journey that takes him through stages of exile, hedonism, privation, and death -it gives us a glimpse into the imagination of one of the great writers of the twentieth century. For here is the young Camus himself, in love with the sea and sun, enraptured by women yet disdainful of romantic love, and already formulating the philosophy of action and moral responsibility that would make him central to the thought of our time.'
],
price: 10.99,
category: 'books',
rating: 4
)

book4.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book4.jpg'), filename: 'book4.jpg')

book5 = Product.create(
name: 'Animal Farm: 75th Anniversary Edition ',
description: [
  '75th Anniversary Edition—Includes a New Introduction by Téa Obreht',
  'George Orwells timeless and timely allegorical novel—a scathing satire on a downtrodden societys blind march towards totalitarianism.',
  '“All animals are equal, but some animals are more equal than others.”',
  'A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.'
],
price: 5.99,
category: 'books',
rating: 5
)

book5.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book5.jpg'), filename: 'book5.jpg')

book6 = Product.create(
name: 'Brave New World',
description: [
  'Now more than ever: Aldous Huxleys enduring masterwork must be read and understood by anyone concerned with preserving the human spirit',
  'A masterpiece. ... One of the most prophetic dystopian works." —Wall Street Journal'
],
price: 10.34,
category: 'books',
rating: 4
)

book6.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book6.jpg'), filename: 'book6.jpg')

book7 = Product.create(
name: 'Become What You Are',
description: [
  'The prominent Zen Buddhist scholar and author of The Wisdom of Insecurity draws on Taoism, Christianity, and other world religions to explore the dilemma of seeking your true self'
],
price: 13.76,
category: 'books',
rating: 3
)

book7.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book7.jpg'), filename: 'book7.jpg')


book8 = Product.create(
name: 'Imagination Creates Reality',
description: [
  'An unabridged edition, to include: One Cause -- How the Law Works -- Conscious Use of the Law Choice - Free Will -- Desire -- Be Observant -- Appearances -- Inner Conversations -- Revision -- States of Consciousness -- The Play -- Your Real Purpose -- Case Histories'
],
price: 4.99,
category: 'books',
rating: 5
)

book8.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book8.jpg'), filename: 'book8.jpg')

book9 = Product.create(
name: 'Fourth Wing (The Empyrean, 1)',
description: [
  'A #1 New York Times bestseller • Optioned for TV by Amazon Studios • Amazon Best Books of the Year, #4 • Apple Best Books of the Year 2023 • Barnes & Noble Best Fantasy Book of 2023 • NPR “Books We Love” 2023 • Audible Best Books of 2023 • Hudson Book of the Year • Google Play Best Books of 2023 • Indigo Best Books of 2023 • Waterstones Book of the Year finalist • Goodreads Choice Award, semi-finalist • Newsweek Staffers Favorite Books of 2023 • Paste Magazines Best Books of 2023'
],
price: 16.99,
category: 'books',
rating: 5
)

book9.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book9.jpg'), filename: 'book9.jpg')

book10 = Product.create(
name: 'Psychology of the Unconscious',
description: [
  'In this, his most famous and influential work, Carl Jung made a dramatic break from the psychoanalytic tradition established by his mentor, Sigmund Freud. Rather than focusing on psychopathology and its symptoms, the Swiss psychiatrist studied dreams, mythology, and literature to define the universal patterns of the psyche.'
],
price: 18.99,
category: 'books',
rating: 4
)

book10.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book10.jpg'), filename: 'book10.jpg')

puts "Done!"

