puts "Creating Electronics"







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
name: 'SAMSUNG 32" Odyssey G65B QHD 240Hz 1ms (GTG) HDR 600 Gaming Hub 1000R Curved Gaming Monitor, Black',
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




keyboard2 = Product.create(
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
keyboard2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/keyboard.jpg'), filename: 'keyboard.jpg')


monitor2 = Product.create(
name: 'SAMSUNG 32" Odyssey G65B QHD 240Hz 1ms (GTG) HDR 600 Gaming Hub 1000R Curved Gaming Monitor, Black',
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

monitor2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/monitor.jpg'), filename: 'monitor.jpg')

tv2 = Product.create(
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


tv2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/vizio-tv.jpg'), filename: 'vizio-tv.jpg')


ssd2 = Product.create(
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


ssd2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/ssdm2.jpg'), filename: 'ssdm2.jpg')


mouse2 = Product.create(
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



mouse2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/mouse.jpg'), filename: 'mouse.jpg')


laptop2 = Product.create(
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

laptop2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/laptop.jpg'), filename: 'laptop.jpg')

power2 = Product.create(
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

power2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/powersupply.jpg'), filename: 'powersupply.jpg')

ram2 = Product.create(
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

ram2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/ram.jpg'), filename: 'ram.jpg')

headphones2 = Product.create(
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

headphones2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/headphones.jpg'), filename: 'headphones.jpg')

pad2 = Product.create(
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

pad2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/launchpad.jpg'), filename: 'launchpad.jpg')
