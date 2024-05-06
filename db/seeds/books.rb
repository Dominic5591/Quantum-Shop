require 'open-uri'


puts "Creating Books"





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

book1.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book1.webp'), filename: 'book1.webp')



book2 = Product.create(
name: 'The 48 Laws of Power',   
price: 14.99,
category: 'books',
rating: 2
)

book2.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book2.webp'), filename: 'book2.webp')

book3 = Product.create(
name: 'True Hallucinations: Being an Account of the Authors Extraordinary Adventures in the Devils Paradise',
description: [
  'This mesmerizing, surreal account of the bizarre adventures of Terence McKenna, his brother Dennis, and a small band of their friends, is a wild ride of exotic experience and scientific inquiry. Exploring the Amazon Basin in search of mythical shamanic hallucinogens, they encounter a host of unusual characters -- including a mushroom, a flying saucer, pirate Mantids from outer space, an appearance by James and Nora Joyce in the guise of poultry, and translinguistic matter -- and discover the missing link in the development of human consciousness and language.'
],
price: 13.99,
category: 'books',
rating: 5
)

book3.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book3.webp'), filename: 'book3.webp')

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

book4.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book4.webp'), filename: 'book4.webp')

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

book5.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book5.webp'), filename: 'book5.webp')

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

book6.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book6.webp'), filename: 'book6.webp')

book7 = Product.create(
name: 'Become What You Are',
description: [
  'The prominent Zen Buddhist scholar and author of The Wisdom of Insecurity draws on Taoism, Christianity, and other world religions to explore the dilemma of seeking your true self'
],
price: 13.76,
category: 'books',
rating: 3
)

book7.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book7.webp'), filename: 'book7.webp')


book8 = Product.create(
name: 'Imagination Creates Reality',
description: [
  'An unabridged edition, to include: One Cause -- How the Law Works -- Conscious Use of the Law Choice - Free Will -- Desire -- Be Observant -- Appearances -- Inner Conversations -- Revision -- States of Consciousness -- The Play -- Your Real Purpose -- Case Histories'
],
price: 4.99,
category: 'books',
rating: 5
)

book8.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book8.webp'), filename: 'book8.webp')

book9 = Product.create(
name: 'Fourth Wing (The Empyrean, 1)',
description: [
  'A #1 New York Times bestseller • Optioned for TV by Amazon Studios • Amazon Best Books of the Year, #4 • Apple Best Books of the Year 2023 • Barnes & Noble Best Fantasy Book of 2023 • NPR “Books We Love” 2023 • Audible Best Books of 2023 • Hudson Book of the Year • Google Play Best Books of 2023 • Indigo Best Books of 2023 • Waterstones Book of the Year finalist • Goodreads Choice Award, semi-finalist • Newsweek Staffers Favorite Books of 2023 • Paste Magazines Best Books of 2023'
],
price: 16.99,
category: 'books',
rating: 5
)

book9.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book9.webp'), filename: 'book9.webp')

book10 = Product.create(
name: 'Psychology of the Unconscious',
description: [
  'In this, his most famous and influential work, Carl Jung made a dramatic break from the psychoanalytic tradition established by his mentor, Sigmund Freud. Rather than focusing on psychopathology and its symptoms, the Swiss psychiatrist studied dreams, mythology, and literature to define the universal patterns of the psyche.'
],
price: 18.99,
category: 'books',
rating: 4
)

book10.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book10.webp'), filename: 'book10.webp')


























book11 = Product.create(
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

book11.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book1.webp'), filename: 'book1.webp')



book12 = Product.create(
name: 'The 48 Laws of Power',   
price: 14.99,
category: 'books',
rating: 2
)

book12.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book2.webp'), filename: 'book2.webp')

book13 = Product.create(
name: 'True Hallucinations: Being an Account of the Authors Extraordinary Adventures in the Devils Paradise',
description: [
  'This mesmerizing, surreal account of the bizarre adventures of Terence McKenna, his brother Dennis, and a small band of their friends, is a wild ride of exotic experience and scientific inquiry. Exploring the Amazon Basin in search of mythical shamanic hallucinogens, they encounter a host of unusual characters -- including a mushroom, a flying saucer, pirate Mantids from outer space, an appearance by James and Nora Joyce in the guise of poultry, and translinguistic matter -- and discover the missing link in the development of human consciousness and language.'
],
price: 13.99,
category: 'books',
rating: 5
)

book13.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book3.webp'), filename: 'book3.webp')

book14 = Product.create(
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

book14.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book4.webp'), filename: 'book4.webp')

book15 = Product.create(
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

book15.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book5.webp'), filename: 'book5.webp')

book16 = Product.create(
name: 'Brave New World',
description: [
  'Now more than ever: Aldous Huxleys enduring masterwork must be read and understood by anyone concerned with preserving the human spirit',
  'A masterpiece. ... One of the most prophetic dystopian works." —Wall Street Journal'
],
price: 10.34,
category: 'books',
rating: 4
)

book16.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book6.webp'), filename: 'book6.webp')

book17 = Product.create(
name: 'Become What You Are',
description: [
  'The prominent Zen Buddhist scholar and author of The Wisdom of Insecurity draws on Taoism, Christianity, and other world religions to explore the dilemma of seeking your true self'
],
price: 13.76,
category: 'books',
rating: 3
)

book17.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book7.webp'), filename: 'book7.webp')


book18 = Product.create(
name: 'Imagination Creates Reality',
description: [
  'An unabridged edition, to include: One Cause -- How the Law Works -- Conscious Use of the Law Choice - Free Will -- Desire -- Be Observant -- Appearances -- Inner Conversations -- Revision -- States of Consciousness -- The Play -- Your Real Purpose -- Case Histories'
],
price: 4.99,
category: 'books',
rating: 5
)

book18.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book8.webp'), filename: 'book8.webp')

book19 = Product.create(
name: 'Fourth Wing (The Empyrean, 1)',
description: [
  'A #1 New York Times bestseller • Optioned for TV by Amazon Studios • Amazon Best Books of the Year, #4 • Apple Best Books of the Year 2023 • Barnes & Noble Best Fantasy Book of 2023 • NPR “Books We Love” 2023 • Audible Best Books of 2023 • Hudson Book of the Year • Google Play Best Books of 2023 • Indigo Best Books of 2023 • Waterstones Book of the Year finalist • Goodreads Choice Award, semi-finalist • Newsweek Staffers Favorite Books of 2023 • Paste Magazines Best Books of 2023'
],
price: 16.99,
category: 'books',
rating: 5
)

book19.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book9.webp'), filename: 'book9.webp')

book20 = Product.create(
name: 'Psychology of the Unconscious',
description: [
  'In this, his most famous and influential work, Carl Jung made a dramatic break from the psychoanalytic tradition established by his mentor, Sigmund Freud. Rather than focusing on psychopathology and its symptoms, the Swiss psychiatrist studied dreams, mythology, and literature to define the universal patterns of the psyche.'
],
price: 18.99,
category: 'books',
rating: 4
)

book20.photo.attach(io: URI.open('https://quantum-shop-seeds.s3.amazonaws.com/product-seeds/book10.webp'), filename: 'book10.webp')

