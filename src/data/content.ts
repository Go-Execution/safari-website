export const SITE = {
  name: 'Safari Knight Tours',
  phone: '+267 72619757 / 75217122',
  phoneHref: 'tel:+26772619757',
  email: 'info@safariknight.co.bw',
  address: 'Regus, Gaborone The Hub, iTowers Ground & First Floor, CBD, Gaborone, Botswana',
<<<<<<< Updated upstream
  logo: 'https://www.safariknight.co.bw/assets/images/logo/safarilogo-01.png',
  baseUrl: 'https://www.safariknight.co.bw/assets/images/',
=======
  logo: '/assets/images/placeholders/placeholder-1.jpg',
  baseUrl: 'https://images.pexels.com/',
>>>>>>> Stashed changes
};

export interface ItineraryDay {
  day: string;
  title?: string;
  text: string;
  highlights?: string;
  meals?: string;
}

export interface Package {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  duration: string;
  price: string;
  priceNote?: string;
  heroImage: string;
  gallery: string[];
  accommodation?: string;
  meals?: string;
  highlights?: string[];
  note?: string;
  overview: string;
  itinerary: ItineraryDay[];
}

export const packages: Package[] = [
  {
    slug: '10-day-camping-okavango-delta',
    name: '10 Day Camping In Okavango Delta',
    shortName: '10 Day Camping',
    category: 'Mobile Camping Safari',
    duration: '10 Days',
    price: 'Price on request',
    priceNote: 'Contact us for a seasonal quote',
<<<<<<< Updated upstream
    heroImage: 'https://www.safariknight.co.bw/assets/images/packages/p1.jpg',
    gallery: [
      'https://www.safariknight.co.bw/assets/images/packages/p1.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p2.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p3.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p4.jpg',
=======
    heroImage: '/assets/images/placeholders/placeholder-2.jpg',
    gallery: [
      '/assets/images/placeholders/placeholder-3.jpg',
      '/assets/images/placeholders/placeholder-4.jpg',
      '/assets/images/placeholders/placeholder-5.jpg',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
>>>>>>> Stashed changes
    ],
    accommodation: 'Budget camping, inside the Okavango Delta',
    meals: 'Lunch & dinner included (breakfast not included). All drinks included — premium wines & liquors may be excluded.',
    overview:
      'A ten-day immersive camping safari deep into the Okavango Delta and Moremi Game Reserve, travelling by mokoro and 4x4 to reach the heart of Botswana\'s wilderness.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Maun → Okavango Delta',
        text: "You'll be picked up at 7:45 am from the hotel/guest house of your choice or Maun Airport. You'll be transferred by motor boat or 4X4 transfer to the Mokoro Station where you will be met by a professional guide. Have a short briefing about your trip then board your mokoro and travel along the channels of the Okavango Delta to the camp on one of the many islands of the Delta. Before reaching your camping destination, you would have spent some hours seeing the beauty and vastness of the Delta. Upon arrival, the staff set up the camp while your chef is preparing lunch. Later in the afternoon, you'll enjoy a game walk or mokoro cruise. Note that you will decide with your professional guide whether you will do a game walk or take a mokoro cruise. Afterwards, you'll return to the camp where dinner is served.",
      },
      {
        day: 'Day 2',
        title: 'Okavango Delta',
        text: "You'll wake up early at around 6:30 am for coffee/tea, cereal and rusks. Then depart on a 4-hour early morning game walk. Return at around 10:00 am for a hearty brunch. You'll then relax in camp or ask your guides to take you for a swim depending on the season of the year. In the afternoon, enjoy a mokoro cruise to experience the other parts of the Okavango Delta. Later on, return to the camp where dinner is served.",
      },
      {
        day: 'Day 3',
        title: 'Okavango Delta → Moremi Game Reserve',
        text: "In the morning, you will have breakfast while the staff takes down the camp. Immediately after breakfast, you will board your mokoro to the Mokoro station, where you will be picked up by either a vehicle or motor boat depending on the water level. Upon arrival, a game drive vehicle will pick you up from the boat station; you will be given 1 hour in town to buy what you want. After a short shopping, you will depart to Moremi Game Reserve. Upon arrival, the camp will be set, and staff will direct you to your camping tents. After a short while, you will have lunch and then go for a siesta. After the siesta, you can have tea and resume your afternoon game drive within the park. Drive back to the camp after your afternoon game drive, enjoying a fresh shower and then dinner will be served. The time to go to bed will be determined by the last guest.",
      },
      {
        day: 'Day 4–6',
        title: 'Moremi Game Reserve',
        text: "You'll wake up early in the morning, have a quick shower and breakfast then resume your game drive within the park. Afterwards, come back to the camp. After a short while, you will have lunch and then go for a siesta. After the siesta, you can have tea and resume your afternoon game drive within the park. You'll then drive back to the camp after your afternoon game drive. Enjoy a fresh shower and then dinner will be served.",
      },
      {
        day: 'Day 7',
        title: 'Moremi Game Reserve → Khwai Concession',
        text: "Wake up early in the morning, have a quick shower and have breakfast then while the staff is breaking down the camp. Immediately after breakfast, you'll venture through Moremi Game Reserve to Khwai, one of the best concessions in Botswana in terms of wildlife. Upon arrival, the camp will be set and staff will direct you to your camping tents. After a short while, you will have lunch and then go for a siesta. After the siesta, you can have tea and resume your afternoon game drive within the park. You'll then return to the campsite where dinner is served.",
      },
      {
        day: 'Day 8–9',
        title: 'Khwai Concession',
        text: "You'll wake up early in the morning, have a quick shower and breakfast then resume your game drive within the park to explore other parts of Khwai. Afterwards, come back to the camp. After a short while, you will have lunch and then go for a siesta. After the siesta, you can have tea and resume your afternoon game drive in Khwai. Drive back to the camp after your afternoon Mokoro Excursion. Later on, enjoy a fresh shower and then dinner will be served.",
      },
      {
        day: 'Day 10',
        title: 'Khwai Concession → Maun (departure)',
        text: "This is the last day of the trip. Wake up at around 8:00 am when breakfast will be served well in time. The staff will then break up the campsite and you will leave Khwai Concession at around 10:00 am for Maun where the safari will end.",
      },
    ],
  },
  {
    slug: 'okavango-delta-safari',
    name: 'Okavango Delta Safari',
    shortName: 'Okavango Delta Safari',
    category: 'Fly-In Lodge Safari',
    duration: '5 Days / 4 Nights',
    price: 'From USD 3,077 to USD 4,000 per person sharing',
    priceNote: 'Indicative price — final cost depends on season and customisation. This is an example itinerary and can be customised on request.',
<<<<<<< Updated upstream
    heroImage: 'https://www.safariknight.co.bw/assets/images/packages/p5.jpg',
    gallery: [
      'https://www.safariknight.co.bw/assets/images/packages/p5.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p6.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p7.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p8.jpg',
=======
    heroImage: '/assets/images/placeholders/placeholder-7.jpg',
    gallery: [
      '/assets/images/placeholders/placeholder-8.jpg',
      '/assets/images/placeholders/placeholder-1.jpg',
      '/assets/images/placeholders/placeholder-2.jpg',
      '/assets/images/placeholders/placeholder-3.jpg',
>>>>>>> Stashed changes
    ],
    accommodation: '2 nights at Oddballs\' Enclave (classic Meru tents) & 2 nights at Camp Savuti (5 Meru tents)',
    meals: 'All meals included as per lodge package.',
    highlights: [
      'Private guided activities at Oddballs\' Enclave',
      'Guided walking on Chief\'s Island',
      'Mokoro through the Okavango Delta',
      'Exploring the magnificent Savuti Marsh',
    ],
    overview:
      'A fly-in lodge safari combining two intimate camps — Oddballs\' Enclave deep in the Delta and Camp Savuti in Chobe — for five days of guided walking, mokoro trails, and world-class game viewing.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Maun → Oddballs\' Enclave (2 nights)',
        text: "Upon arrival in Maun, you will be met by Delta Air who will assist you to the light aircraft and onward air transfer to Oddballs' Enclave. The Enclave is on a small island just off the south-western edge of Chief's Island, deep in the heart of the Okavango, and bordering Moremi Game Reserve. The camp is accessible only by light aircraft. On arrival, you will be met at the airstrip and welcomed to the island by your private guide, who will remain your guide for the duration of your stay. Oddballs' Enclave accommodates a maximum of 10 guests, in five twins or double bedded mini Meru tents, making it a classic and intimate camp. The tents are on elevated wooden decks, each with a semi-detached private bathroom with hot and cold running water and an alfresco bucket shower. The guest areas have a variety of comfortable seating and a raised viewing deck overlooks the sweep of the Delta – the perfect place to watch the sun or moon rise and view whatever wildlife may be visiting. Meals are enjoyed on the deck with spectacular views across the floodplains to distant island forests. The Enclave offers only walking and mokoro, the traditional dug-out canoe of the swamps. Your private guide (maximum of two guests per guide) was born and raised in the area. He owns his mokoro (the genuine wooden article, no plastic replicas for us) and will take you out on it in the early mornings and afternoons, to nearby islands where he will walk with you to view wildlife and the spectacular landscape that is the Okavango. On request, the camp will pack a picnic lunch for you, allowing you to stay out the whole day. Walking unarmed among the full range of Africa's wildlife is an experience that will live with you for a long time. Your guide is intimate with this landscape, and his knowledge of the big and little things that comprise it will astound you. Spend two nights at Oddballs' Enclave.",
      },
      {
        day: 'Day 3–4',
        title: 'Oddballs\' Enclave → Camp Savuti (2 nights)',
        text: "After breakfast at Oddballs' Enclave, you will depart by light aircraft to Camp Savuti. Camp Savuti is a 20-minute game drive from the Savuti airstrip in Chobe National Park. The Savuti Marsh, fed by the Savuti Channel, has developed a reputation over the years as one of the world's premier predator viewing areas, boasting one of the highest concentrations of wildlife on the African continent. A number of award-winning documentary films shot in Savuti have cemented its reputation. The Channel, dry since 1982, started flowing again in 2010 and is now once again flooding the Marsh, an area of sweet grasses that attract herbivores of every description and, this being Africa, their attendant predators. Camp Savuti is a small, intimate camp of 5 Meru tents accommodating a maximum of 10 guests in comfort and style. The tents have been positioned to ensure privacy and a modest level of exclusivity throughout the camp. Each tent sits on a platform, with views over the Savuti Channel. The tents are large and spacious with en-suite facilities. In the guest areas, there is a comfortable and open lounge, bar and dining area, and fire pit, all overlooking the Savuti Channel. The activities include morning and afternoon game drives through the park and along the fringes of the channel and marsh. The game-viewing vehicles are open to facilitate game-watching and photography, and your guide will delight in showing you the beauty and diversity of Savuti's natural wonders. This camp offers superb game and birding-viewing and the open area around the marsh is truly spectacular. Spend two nights at Camp Savuti.",
      },
      {
        day: 'Day 5',
        title: 'Camp Savuti → Maun (departure)',
        text: "Enjoy an early morning safari, after which breakfast is served. Depart Camp Savuti via light aircraft to Maun for your onward journey.",
      },
    ],
  },
  {
    slug: 'luxury-belmond-delta-victoria-falls',
    name: 'Luxury Belmond, Delta and Victoria Falls',
    shortName: 'Luxury Belmond',
    category: 'Luxury Fly-In Safari',
    duration: '7 Days / 6 Nights',
    price: 'Price on request',
    priceNote: 'Prices subject to change seasonally. Contact us for a tailored quote.',
<<<<<<< Updated upstream
    heroImage: 'https://www.safariknight.co.bw/assets/images/packages/p10.jpg',
    gallery: [
      'https://www.safariknight.co.bw/assets/images/packages/p10.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p11.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p12.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p13.jpg',
=======
    heroImage: '/assets/images/placeholders/placeholder-4.jpg',
    gallery: [
      '/assets/images/placeholders/placeholder-5.jpg',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
      '/assets/images/placeholders/placeholder-7.jpg',
      '/assets/images/placeholders/placeholder-8.jpg',
>>>>>>> Stashed changes
    ],
    accommodation: 'Belmond Eagle Island Camp (2 nights), Belmond Khwai River Lodge (2 nights), The Victoria Falls Hotel (2 nights)',
    meals: 'All meals included as per lodge package.',
    highlights: [
      'Scenic helicopter flight over the Delta',
      'Water-based safari by mokoro and motorized cruises',
      'Night-vision game drives at Khwai River Lodge',
      'Private guided walking tour of Victoria Falls',
      'Sundowner cruise on the Zambezi River',
    ],
    overview:
      'A seven-day luxury fly-in safari pairing Belmond\'s finest Delta lodges with the iconic Victoria Falls Hotel — the ultimate Botswana and Zimbabwe experience.',
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Maun → Belmond Eagle Island Camp (2 nights)',
        text: "Scheduled flight to Maun, where you will board a light aircraft and head to Belmond Eagle Island Camp for your 2 night stay. Offering an unrivaled water-based safari, Belmond Eagle Island Lodge has just reopened in November 2015 with a totally new look and feel, following a ten-month closure and almost total rebuild. The fresh new tented guest accommodation, restaurants and lounges reflect the region's natural beauty and the adventures of early explorers. Located in one of the delta's most pristine natural locations with a myriad of waterways, palm-treed islands, and vast flood plains. The camp offers a choice of game viewing by mokoro (traditional dugout canoe) or motorized sundowner cruises in the surrounding lagoons, walks and helicopter safaris. SCENIC HELICOPTER FLIGHT OVER THE DELTA: A scenic helicopter flight over Botswana is one of life's big adventures. Surprisingly, you may hover just a few feet over great herds of zebra as they continue to graze, completely unconcerned. Belmond Eagle Island Lodge is the only camp in the Okavango Delta that boasts a permanently based helicopter, allowing every one of our guests the opportunity to experience this once in a lifetime adventure.",
      },
      {
        day: 'Day 3–4',
        title: 'Moremi Wildlife Reserve → Belmond Khwai River Lodge (2 nights)',
        text: "Overlooking the vast Khwai River floodplains and beyond, Belmond Khwai River Lodge offers morning, afternoon and after-dark night-vision game drives in open Land Cruisers. Spend 2 nights enjoying this spectacular lodge. A cultural visit to the local village can be arranged, as well as guided safari walks along the Khwai River. If you wish to enjoy a little pampering, arrange an indulgent massage and body wrap in the spa or in the privacy of your own tent.",
      },
      {
        day: 'Day 5–6',
        title: 'Victoria Falls, Zimbabwe → The Victoria Falls Hotel (2 nights)',
        text: "Transfer by light aircraft to Vic Falls and by road to the historic Victoria Falls Hotel for a 2 night stay. In the afternoon you'll enjoy a private guided walking tour of Victoria Falls followed by a magnificent sundowner cruise on the mighty Zambezi River.",
      },
      {
        day: 'Day 7',
        title: 'Departure or optional extension',
        text: "There are many activities that can be enjoyed at the Falls so we can extend your stay else on the last day, transfer to the airport for your onward flight. NB: Prices subjected to change seasonally.",
      },
    ],
  },
  {
    slug: '7-day-delta-chobe',
    name: '7 Day Delta & Chobe',
    shortName: '7 Day Delta & Chobe',
    category: 'Overland Group Safari',
    duration: '7 Days',
    price: 'Price on request',
    priceNote: 'Contact us for a seasonal quote. Cross-border route: starts in Windhoek, Namibia, ends in Victoria Falls, Zimbabwe.',
<<<<<<< Updated upstream
    heroImage: 'https://www.safariknight.co.bw/assets/images/packages/p10.jpg',
    gallery: [
      'https://www.safariknight.co.bw/assets/images/packages/p10.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p14.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p16.jpg',
      'https://www.safariknight.co.bw/assets/images/packages/p13.jpg',
=======
    heroImage: '/assets/images/placeholders/placeholder-1.jpg',
    gallery: [
      '/assets/images/placeholders/placeholder-2.jpg',
      '/assets/images/placeholders/placeholder-3.jpg',
      '/assets/images/placeholders/placeholder-4.jpg',
      '/assets/images/placeholders/placeholder-5.jpg',
>>>>>>> Stashed changes
    ],
    accommodation: 'Lodge accommodation in twin rooms with en-suite bathrooms',
    meals: 'Most meals included (Breakfast, Lunch & Dinner on most days)',
    note: 'This is a cross-border overland route starting in Windhoek, Namibia, and ending in Victoria Falls, Zimbabwe.',
    overview:
      'A seven-day overland adventure from Windhoek through the Kalahari, Okavango Delta, Makgadikgadi Salt Pans, and Chobe National Park to Victoria Falls — three countries, one epic journey.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Windhoek → Kalahari Desert → Ghanzi',
        text: "Our wilderness adventure departs from Windhoek the capital of Namibia. Leaving Windhoek we drive east into the Kalahari Desert, towards the Botswana border. The Kalahari is a semi-desert region, covering 930 000 km² of sandy plains on the interior plateau of Southern Africa. Driving into the barren and dry expanse of red-sand savannahs and low hills, we cross from Namibia into Botswana. We spend the night in Ghanzi, the capital of the Kalahari in remote western Botswana. Tonight we enjoy a lively San (bushmen) performance, showcasing traditional song, dance and storytelling practices of this ancient, semi-nomadic tribe.",
        highlights: 'San tribal evening',
        meals: 'Lunch & Dinner',
      },
      {
        day: 'Day 2',
        title: 'Ghanzi → Maun',
        text: "On the second morning, we join the local San for a guided walk in the Kalahari Desert. The nature walk reveals more about this harsh environment, it's fascinating animals and unusual plants. Walking with the San also gives you the chance to learn about these ancient hunter-gatherers and their culture. Discover the ingenious survival techniques and wealth of indigenous knowledge developed by the San over the ages. After our walk with the Kalahari San, we drive to Maun, the access hub for trips into the Okavango Delta. The delta is Botswana's crowning wilderness treasure - one of the wildest places in Africa. This afternoon you have the option of embarking on an optional flight over the Okavango Delta in a small fixed-wing plane. The scenic flight over the Okavango Delta offers sweeping views of the labyrinth of waterways, floodplains, islands and lagoons where wildlife can be spotted. The ever-changing delta system shrinks and swells with the rains, covering about 16 000 km² of unspoilt wetlands and plains, depending on the rains of the season. This is one of the largest inland deltas on the planet, with a multitude of waterways emptying into the semi-arid Kalahari basin. Regardless of the changing seasons and water levels, the delta remains a truly wild and tranquil natural wonder year-round. Tonight your guide tells you more about our day trip into the delta the next day. Alternatively, you can upgrade to a two-night Okavango Delta Trip (optional extra) and fly from Maun to a remote tented camp in the heart of the Okavango Delta this afternoon. In Maun accommodation is in twin rooms with en-suite bathrooms at a lodge on leafy grounds beside the Thalamakane River.",
        highlights: 'San guided nature walk',
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 'Day 3',
        title: 'Okavango Delta day trip by mokoro',
        text: "Spend a full day exploring the UNESCO World Heritage Site of the Okavango Delta. Today is about being in untamed nature, taking a break from civilisation and experiencing the peace of the wild delta environment. In the morning we drive for about an hour to reach a mokoro polers' station where we meet the local guides who take us into the delta today. From there we continue by mekoros - the traditional dug-out canoes used to navigate the waterways and lagoons of the Okavango Delta. Each mokoro is moved through the water by an experienced local who stands in the back of the vessel and uses a long pole to steer two seated guests slowly along. Gliding along the reed-lined channels and undisturbed lagoons is the ideal way to take in the flora and fauna of the tranquil delta. Pausing at one of the small islands your local guides lead you on a bushwalk giving you a closer look at the unique plants and animals of this incredible ecosystem. The Okavango Delta hosts an astounding diversity of plant and animal species, including rare and endemic lifeforms, hence the delta's status as a World Heritage Site. Although our day trip into the delta is not primarily about spotting big game, we may come across numerous small creatures - insects, reptiles, birds and mammals, and perhaps even large animals. Large mammals include lions, leopards, buffalos, elephants, hippopotami, giraffes and more; all of which may be encountered on our explorations. Other mammalian inhabitants include numerous antelopes, such as the rare lechwe, tsesebe and sitatunga, as well as otters, civets, servals, genets and honey-badgers. The Okavango Delta is also home to crocodiles, geckos, tortoises, chameleons and a variety of other reptiles, along with an incredible diversity of plants and insects. The delta is a birding paradise with more than 450 bird species recorded here, amongst them several rare and endangered species. After the nature walk, your guides pole you back through the maze of delta waterways to the mooring point where the safari vehicle awaits. At the end of the day, you are driven back to the comfortable lodge in Maun.",
        highlights: 'Okavango Delta Day Trip by mokoro',
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 'Day 4',
        title: 'Maun → Nata (Makgadikgadi Salt Pans)',
        text: "Today those who opted for the Upgraded Delta Trip will wake up in the heart of the wild Okavango Delta and enjoy breakfast at camp, before returning to the airstrip and flying out of the Okavango Delta. Once the group is reunited we board our overland adventure vehicle and depart from Maun. Leaving the watery delta region we travel east to the stark Makgadigadi Pans. Along the way we pass through sparsely populated and undeveloped rural Botswana, catching sight of the bleached expanse of the pans en route. Watch for the giant old baobab trees that line the road near Nata. Part of our drive takes us through Nxai Pan and Makgadigadi Pans, where we may spot antelopes and other wildlife, catching a few glimpses of the vast salt pans stretching out dramatically under wide skies. This afternoon we take an optional game drive in Nata Sanctuary to experience the vast spaciousness and silence out on this flat expanse. The Nata Pans are part of the extensive network of Makgadikgadi Salt Pans, once covered by massive inland lakes. This salt pan complex is one of the largest in the world and in winter the pans are dry and stark, whilst in summer short grasses and shallow pools attract an array of animals and birds. Nata is a breeding ground for waterbirds including pelicans and flamingoes so we may see flocks of these in season.",
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 'Day 5',
        title: 'Nata → Kasane / Chobe National Park',
        text: "On day five we get up bright and early for our journey north to Kasane. Located in the far northeastern corner of Botswana, Kasane is the gateway to Chobe National Park. We head to our lodge beside the Chobe River, which forms the northern boundary of the national park. Later, we embark on an optional afternoon game drive in Chobe Park, venturing into the bush in open 4x4 safari vehicles. The most famous game park in Botswana, Chobe offers superb game viewing, boasting one of the highest concentrations of wild animals in Africa. The park is most famous for its big herds of elephants. Chances of encountering elephants are extremely high, as well we buffalo herds and various antelope species. Regular predator sightings include lion, hyena, jackal and even leopard. Driving in the open safari vehicle is a thrilling way to experience the African bush up close - sights, sounds, smells and all. We end our day off with a laid-back boat cruise on Chobe River. In the late afternoons, elephants tend to gather along the river, along with other animals, making this an ideal time for our sunset cruise. Keep your cameras ready as the river attracts an impressive array of birds. Crocodiles, hippos, baboons, lizards and antelopes are commonly spotted too.",
        highlights: 'Chobe National Park sunset boat cruise',
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 'Day 6',
        title: 'Chobe → Victoria Falls, Zimbabwe',
        text: "Day six, time to cross into the final country on our Southern Africa overland adventure - Zimbabwe. The distance from Kasane to Victoria Fall is relatively short and soon we arrive at our next lodge along the Zambezi River. Today you have the chance to visit the natural wonder of the Victoria Falls waterfall. This is the largest waterfall on earth, plummeting 108 metres into the Batoka Gorge, in a surging curtain of water about 1708 metres (5604 feet) wide. The locals call it Mosi-oa-Tunya, which means the 'Smoke that Thunders' - an apt name for the roaring falls with its cloud of mist. After visiting the wonderous Vic Falls you can do some sightseeing in the historic town of Victoria Falls or head off on an optional adventure activity. Your guide can help you to choose and book activities for this afternoon and tomorrow, after the tour. Victoria Falls is known as the Adventure Capital of Southern Africa for good reason with an exciting mix of activities to experience. The 111 meters (364 feet) high bungee jump off the historical Victoria Falls Bridge, which connects the Zimbabwean and Zambian banks of the Zambezi River, is a top favourite with adrenalin seekers. Some of the biggest rapids in the world are found on this part of the Zambezi River, making the Victoria Falls area one of the best for whitewater rafting - a must for adventure lovers! Scenic flights over Vic Falls offer a thrilling way to witness the powerful falls, with choices including microlight, helicopter and small plane flights. Alternatively, you can browse local arts and crafts at the markets and sit at a coffee shop, before we meet up for dinner out (own account) in town tonight. Tonight we head to a local restaurant to celebrate the memories made on our magical adventure from Windhoek to Victoria Falls.",
        meals: 'Breakfast, Lunch & Dinner',
      },
      {
        day: 'Day 7',
        title: 'Victoria Falls — tour ends after breakfast',
        text: "Although our Delta & Chobe Adventure Safari comes to an end after breakfast at the lodge this morning, we highly recommend spending some extra time at the adventure hub of Victoria Falls. Optional Activities: Zambezi Sunset Boat Cruise, Bungee Jumping, Helicopter Flights, White Water Rafting.",
        meals: 'Breakfast',
      },
    ],
  },
];

export function getPackage(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export const services = [
  {
    title: 'Accommodation bookings & reservations',
    description: 'We handle lodge and camp reservations across Botswana and neighbouring countries, from budget camping to luxury fly-in lodges.',
    icon: 'BedDouble',
  },
  {
    title: 'Group tours & tailor-made safaris',
    description: 'Join a scheduled group departure or let us craft a private, fully customised itinerary built around your interests and pace.',
    icon: 'Users',
  },
  {
    title: 'Bird watching & sceneries',
    description: 'Botswana hosts over 450 bird species. We\'ll guide you to the best floodplains, lagoons, and pans for unforgettable birding.',
    icon: 'Binoculars',
  },
  {
    title: 'Nature expeditions & cultural programmes',
    description: 'Go beyond game drives — meet San communities, explore the Makgadikgadi Salt Pans, and discover the people and landscapes of Botswana.',
    icon: 'Compass',
  },
];

export const pillars = [
  {
    title: 'History',
    text: 'Safari Knight Tours is a travel management company. As a travel agency we offer a full customised safari and holidays experience to exciting destinations throughout Botswana and beyond. Safari Knight Tours is a registered company located in the heart of Botswana.',
  },
  {
    title: "Preserving Botswana's natural wonders",
    text: "Inspiration is driven by the owners and staff, who have a true love for the country and a deep-seated commitment, not only to preserve Botswana's wildlife and natural wonders, but to share them with the rest of the world.",
  },
  {
    title: 'Botswana and beyond',
    text: 'Strengthened by valuable experience gained to date in its home market, Safari Knight Tours intends to expand into numerous other African destinations, partnering with the best suppliers who share the same level of expertise, enthusiasm, and drive.',
  },
  {
    title: 'Our experience',
    text: "As an experienced tour operator, we personalise our safaris according to our customer's tastes and needs. Safari Knight Tours combines luxury, style, service, and authenticity to provide a unique, exciting adventure. All of our safaris are conducted by talented, responsible, and caring guides, in comfortable 4×4 safari vehicles.",
  },
  {
    title: 'Our pride',
    text: 'While we endeavour to offer competitive prices, we will always favour ethics, quality, and financial protection. We place the utmost importance on ensuring our guides are well paid and looked after, and our safari vehicle fleet is well maintained.',
  },
];

export const testimonials = [
  {
    name: 'Kedibonye Gamodimo',
    quote: 'An unforgettable journey through the Delta — every day brought a new landscape, a new encounter. Safari Knight made it effortless from start to finish.',
    photo: 'https://www.safariknight.co.bw/assets/images/testimonial/01_testimonial.jpg',
    sample: true,
  },
  {
    name: 'Ogone Kabalano',
    quote: 'From the mokoro rides to the sunset on the Chobe River, this was the trip of a lifetime. The guides\' knowledge of the bush is extraordinary.',
<<<<<<< Updated upstream
    photo: 'https://www.safariknight.co.bw/assets/images/testimonial/02_testimonial.jpg',
=======
    photo: '/assets/images/placeholders/placeholder-7.jpg',
>>>>>>> Stashed changes
    sample: true,
  },
];

export const planTripDestinations = [
<<<<<<< Updated upstream
  { id: 'unsure', label: 'Not sure — recommend a package for me', image: 'https://www.safariknight.co.bw/assets/images/products/elements/plan/okavango.jpg' },
  { id: '10-day-camping', label: '10 Day Camping In Okavango Delta', image: 'https://www.safariknight.co.bw/assets/images/products/elements/plan/okavango.jpg' },
  { id: 'okavango-safari', label: 'Okavango Delta Safari', image: 'https://www.safariknight.co.bw/assets/images/products/elements/plan/makgadikgadi.jpg' },
  { id: 'luxury-belmond', label: 'Luxury Belmond, Delta & Victoria Falls', image: 'https://www.safariknight.co.bw/assets/images/products/elements/plan/chobe.jpg' },
  { id: '7-day-delta-chobe', label: '7 Day Delta & Chobe', image: 'https://www.safariknight.co.bw/assets/images/products/elements/plan/kgalagadi.jpg' },
];

export const planTripGroupSizes = [
  { id: 'solo', label: 'Solo', image: 'https://www.safariknight.co.bw/assets/images/products/elements/solo.jpg' },
  { id: 'couple', label: 'Couple', image: 'https://www.safariknight.co.bw/assets/images/products/elements/couple.jpg' },
  { id: 'small-group', label: 'Small Group (3–4)', image: 'https://www.safariknight.co.bw/assets/images/products/elements/smallg.jpg' },
  { id: 'big-group', label: 'Big Group (5+)', image: 'https://www.safariknight.co.bw/assets/images/products/elements/bigg.jpg' },
=======
  { id: 'unsure', label: 'Not sure — recommend a package for me', image: '/assets/images/placeholders/placeholder-8.jpg' },
  { id: '10-day-camping', label: '10 Day Camping In Okavango Delta', image: '/assets/images/placeholders/placeholder-1.jpg' },
  { id: 'okavango-safari', label: 'Okavango Delta Safari', image: '/assets/images/placeholders/placeholder-2.jpg' },
  { id: 'luxury-belmond', label: 'Luxury Belmond, Delta & Victoria Falls', image: '/assets/images/placeholders/placeholder-3.jpg' },
  { id: '7-day-delta-chobe', label: '7 Day Delta & Chobe', image: '/assets/images/placeholders/placeholder-4.jpg' },
];

export const planTripGroupSizes = [
  { id: 'solo', label: 'Solo', image: '/assets/images/placeholders/placeholder-5.jpg' },
  { id: 'couple', label: 'Couple', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80' },
  { id: 'small-group', label: 'Small Group (3–4)', image: '/assets/images/placeholders/placeholder-7.jpg' },
  { id: 'big-group', label: 'Big Group (5+)', image: '/assets/images/placeholders/placeholder-8.jpg' },
>>>>>>> Stashed changes
];

export const planTripDurations = [
  { id: '1-3', label: '1 to 3 Days' },
  { id: '4-5', label: '4 to 5 Days' },
  { id: '6-7', label: '6 to 7 Days' },
  { id: '8+', label: '8+ Days' },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'What We Offer', path: '/services' },
  { label: 'Our Packages', path: '/packages' },
  { label: 'Plan Your Trip', path: '/plan-your-trip' },
  { label: 'Contact Us', path: '/contact' },
];
<<<<<<< Updated upstream
=======

export interface SpeciesProfile {
  id: string;
  name: string;
  latinName: string;
  category: 'Big Cats' | 'Great Herbivores' | 'Avian Wonders' | 'River Titans' | 'Rare & Endangered';
  status: 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Least Concern';
  statusCode: 'EN' | 'VU' | 'NT' | 'LC';
  statusColor: string;
  speed: string;
  weight: string;
  lifespan: string;
  habitat: string;
  image: string;
  leadFact: string;
  description: string;
  encounterSeason: string;
  botswanaHotspot: string;
  relatedPackageSlug: string;
}

export const speciesList: SpeciesProfile[] = [
  {
    id: 'african-elephant',
    name: 'African Bush Elephant',
    latinName: 'Loxodonta africana',
    category: 'Great Herbivores',
    status: 'Endangered',
    statusCode: 'EN',
    statusColor: '#EF4444',
    speed: '40 km/h (25 mph)',
    weight: 'Up to 6,000 kg (13,000 lbs)',
    lifespan: '60–70 years in wild',
    habitat: 'Okavango Delta floodplains, Chobe Riverfront, Savuti Marsh',
    image: '/assets/images/placeholders/placeholder-1.jpg',
    leadFact: 'Botswana is home to over 130,000 elephants — the largest surviving population on Earth.',
    description: 'The African bush elephant is the world’s largest living terrestrial animal. In Chobe National Park, herds gather in extraordinary numbers along the riverbanks during the dry season, creating one of nature’s most profound wildlife spectacles.',
    encounterSeason: 'May to October (Dry Season peak gathering)',
    botswanaHotspot: 'Chobe National Park & Savuti Marsh',
    relatedPackageSlug: '7-day-delta-chobe',
  },
  {
    id: 'african-lion',
    name: 'African Lion',
    latinName: 'Panthera leo',
    category: 'Big Cats',
    status: 'Vulnerable',
    statusCode: 'VU',
    statusColor: '#F59E0B',
    speed: '80 km/h (50 mph)',
    weight: '150–225 kg (330–500 lbs)',
    lifespan: '10–14 years in wild',
    habitat: 'Savuti Channel, Moremi Game Reserve, Duba Plains',
    image: '/assets/images/placeholders/placeholder-2.jpg',
    leadFact: 'Savuti’s lion prides are legendary for their strength, adapted to hunting massive cape buffalos and elephants.',
    description: 'Dominating Botswana’s predator landscape, the lions of the Okavango and Savuti live in powerful mega-prides. They are famous for swimming between delta islands and hunting in daylight across open grasslands.',
    encounterSeason: 'Year-round (Best sightings June to October)',
    botswanaHotspot: 'Savuti Marsh & Moremi Game Reserve',
    relatedPackageSlug: 'okavango-delta-safari',
  },
  {
    id: 'african-leopard',
    name: 'African Leopard',
    latinName: 'Panthera pardus pardus',
    category: 'Big Cats',
    status: 'Vulnerable',
    statusCode: 'VU',
    statusColor: '#F59E0B',
    speed: '58 km/h (36 mph)',
    weight: '30–70 kg (66–154 lbs)',
    lifespan: '12–17 years',
    habitat: 'Riverine forest, sausage trees of Moremi & Khwai',
    image: '/assets/images/placeholders/placeholder-3.jpg',
    leadFact: 'Master of stealth: Moremi Game Reserve has one of the highest leopard densities in Africa.',
    description: 'With golden coats stamped with rosette patterns, leopards are masters of camouflage. They haul prey weighing twice their own body weight high into sausage tree boughs to safeguard their meal from lions and hyenas.',
    encounterSeason: 'Year-round (Best on night drives in Khwai Concession)',
    botswanaHotspot: 'Khwai Concession & Moremi Wildlife Reserve',
    relatedPackageSlug: '10-day-camping-okavango-delta',
  },
  {
    id: 'african-wild-dog',
    name: 'African Wild Dog (Painted Wolf)',
    latinName: 'Lycaon pictus',
    category: 'Rare & Endangered',
    status: 'Endangered',
    statusCode: 'EN',
    statusColor: '#EF4444',
    speed: '72 km/h (45 mph)',
    weight: '20–30 kg (44–66 lbs)',
    lifespan: '10–12 years',
    habitat: 'Mopane woodland & open floodplains of Northern Botswana',
    image: '/assets/images/placeholders/placeholder-4.jpg',
    leadFact: 'With an 80% hunting success rate, wild dogs are Africa’s most tactical pack predators.',
    description: 'Recognizable by their tricolor marbled coats and oversized rounded ears, wild dogs are critically endangered. Botswana’s vast unfenced concession areas offer one of the final safe havens where these cooperative hunters thrive.',
    encounterSeason: 'Denning season May to August for puppy sightings',
    botswanaHotspot: 'Khwai Private Concession & Moremi',
    relatedPackageSlug: '10-day-camping-okavango-delta',
  },
  {
    id: 'african-fish-eagle',
    name: 'African Fish Eagle',
    latinName: 'Haliaeetus vocifer',
    category: 'Avian Wonders',
    status: 'Least Concern',
    statusCode: 'LC',
    statusColor: '#10B981',
    speed: '48 km/h dive',
    weight: '2.0–3.6 kg',
    lifespan: '15–24 years',
    habitat: 'Permanent water channels of Okavango & Chobe River',
    image: '/assets/images/placeholders/placeholder-5.jpg',
    leadFact: 'Its piercing call is celebrated worldwide as the "Voice of Africa."',
    description: 'Perched high in dead leadwood trees overlooking delta lagoons, this striking raptor with snow-white mantle and chest swoops down with talon-first precision to pluck large bream and catfish straight from the water.',
    encounterSeason: 'Year-round (Outstanding from boat cruises)',
    botswanaHotspot: 'Okavango Delta Channels & Chobe River',
    relatedPackageSlug: 'okavango-delta-safari',
  },
  {
    id: 'hippopotamus',
    name: 'Hippopotamus',
    latinName: 'Hippopotamus amphibius',
    category: 'River Titans',
    status: 'Vulnerable',
    statusCode: 'VU',
    statusColor: '#F59E0B',
    speed: '30 km/h on land',
    weight: '1,300–1,800 kg',
    lifespan: '40–50 years',
    habitat: 'Deep lagoons, papyrus channels, sandbanks',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    leadFact: 'Hippos engineer the Delta by carving pathways through reedbeds that become mokoro water channels.',
    description: 'Submerged throughout the searing heat of the day with only nostrils, eyes, and ears visible, hippos emerge at dusk to graze on riverbank grasses, shaping the geography and flow of the Okavango waterways.',
    encounterSeason: 'Year-round',
    botswanaHotspot: 'Delta Lagoons & Chobe River',
    relatedPackageSlug: '10-day-camping-okavango-delta',
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    latinName: 'Acinonyx jubatus',
    category: 'Big Cats',
    status: 'Vulnerable',
    statusCode: 'VU',
    statusColor: '#F59E0B',
    speed: '112 km/h (70 mph)',
    weight: '35–65 kg',
    lifespan: '10–12 years',
    habitat: 'Open grasslands of Makgadikgadi Salt Pans & Nxai Pan',
    image: '/assets/images/placeholders/placeholder-7.jpg',
    leadFact: 'Accelerates from 0 to 100 km/h in just 3 seconds across flat salt pans.',
    description: 'The world’s fastest land mammal relies on panoramic visibility across Botswana’s vast salt pans and open savanna. Their slender aerodynamic frames and non-retractable claws give them unmatched sprint traction.',
    encounterSeason: 'November to April (Kalahari & Nxai Pan rainy season)',
    botswanaHotspot: 'Makgadikgadi & Nxai Pan National Park',
    relatedPackageSlug: '7-day-delta-chobe',
  },
  {
    id: 'nile-crocodile',
    name: 'Nile Crocodile',
    latinName: 'Crocodylus niloticus',
    category: 'River Titans',
    status: 'Least Concern',
    statusCode: 'LC',
    statusColor: '#10B981',
    speed: '35 km/h in water',
    weight: 'Up to 750 kg',
    lifespan: '70–100 years',
    habitat: 'Chobe River, Okavango Panhandle, Linyanti waterways',
    image: '/assets/images/placeholders/placeholder-8.jpg',
    leadFact: 'Prehistoric apex predator unchanged for over 65 million years, boasting an unmatched bite force.',
    description: 'Sunbathing on sandbanks along the Chobe River, these ancient giants can grow over 5 meters in length. They play an indispensable role in delta ecology by keeping fish populations balanced.',
    encounterSeason: 'Dry winter months (June to September) basking under midday sun',
    botswanaHotspot: 'Chobe River & Panhandle',
    relatedPackageSlug: '7-day-delta-chobe',
  },
];

export interface NatGeoStory {
  id: string;
  tag: string;
  title: string;
  desc?: string;
  image: string;
  link: string;
  author?: string;
  date?: string;
}

export const featuredGridStories: {
  leadStory: NatGeoStory;
  secondaryStory: NatGeoStory;
  subCards: NatGeoStory[];
} = {
  leadStory: {
    id: 'lead-elephant',
    tag: 'SAFARI EXPEDITIONS',
    title: 'Experience the Okavango Delta: A Safari Like No Other',
    desc: 'Deep inside the Okavango Delta, navigate through pristine waterways and encounter diverse wildlife on an unforgettable journey.',
    image: '/assets/images/placeholders/placeholder-1.jpg',
    link: '/packages/10-day-camping-okavango-delta',
    author: 'Chief Field Guide',
    date: 'Featured Package',
  },
  secondaryStory: {
    id: 'sec-weapon',
    tag: 'EXPERT ADVICE',
    title: 'Mobile Camping vs. Fly-In Lodges: Which is Right for You?',
    desc: 'Discover the difference between sleeping under the stars in a mobile camp and the luxury of a fly-in safari lodge.',
    image: '/assets/images/placeholders/placeholder-2.jpg',
    link: '/plan-your-trip',
    author: 'Travel Desk',
    date: 'Planning',
  },
  subCards: [
    {
      id: 'sub-wild-dogs',
      tag: 'DESTINATIONS',
      title: 'Chobe National Park: The Elephant Capital of the World',
      image: '/assets/images/placeholders/placeholder-3.jpg',
      link: '/packages/7-day-delta-chobe',
    },
    {
      id: 'sub-field-expedition',
      tag: 'LUXURY SAFARIS',
      title: 'Helicopter Flights and Sunset Cruises: The Belmond Experience',
      image: '/assets/images/placeholders/placeholder-4.jpg',
      link: '/packages/luxury-belmond-delta-victoria-falls',
    },
    {
      id: 'sub-planner',
      tag: 'OUR SERVICES',
      title: 'From Tailor-Made Itineraries to Cultural Expeditions',
      image: '/assets/images/placeholders/placeholder-5.jpg',
      link: '/services',
    },
  ],
};

export const editorialStreamStories: {
  lead: NatGeoStory;
  stream: NatGeoStory[];
} = {
  lead: {
    id: 'stream-lead',
    tag: 'BIRD WATCHING',
    title: 'A Birding Paradise: Discover Over 450 Species in the Okavango Delta',
    desc: 'From the African Fish Eagle to the vibrant Lilac-breasted Roller, Botswana offers some of the most spectacular bird watching on the planet.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    link: '/packages/okavango-delta-safari',
  },
  stream: [
    {
      id: 'st-1',
      tag: 'OVERLAND TOURS',
      title: 'Cross-Border Adventures: From Namibia to Victoria Falls',
      image: '/assets/images/placeholders/placeholder-7.jpg',
      link: '/packages/7-day-delta-chobe',
    },
    {
      id: 'st-2',
      tag: 'PREDATORS',
      title: 'Tracking Africa’s Big Cats with Expert Safari Guides',
      image: '/assets/images/placeholders/placeholder-8.jpg',
      link: '/packages/okavango-delta-safari',
    },
    {
      id: 'st-3',
      tag: 'CULTURAL TOURS',
      title: 'Walking with the San: Ancient Knowledge of the Kalahari',
      image: '/assets/images/placeholders/placeholder-1.jpg',
      link: '/packages/7-day-delta-chobe',
    },
    {
      id: 'st-4',
      tag: 'ACCOMMODATION',
      title: 'Inside the Best Luxury Lodges and Wild Camps of Botswana',
      image: '/assets/images/placeholders/placeholder-2.jpg',
      link: '/services',
    },
    {
      id: 'st-5',
      tag: 'OUR PROMISE',
      title: 'Committed to Sustainable Tourism and Wildlife Conservation',
      image: '/assets/images/placeholders/placeholder-3.jpg',
      link: '/about',
    },
    {
      id: 'st-6',
      tag: 'SAFARI LOG',
      title: 'Mokoro Excursions: The Most Peaceful Way to See the Delta',
      image: '/assets/images/placeholders/placeholder-4.jpg',
      link: '/packages/10-day-camping-okavango-delta',
    },
    {
      id: 'st-7',
      tag: 'VICTORIA FALLS',
      title: 'The Smoke That Thunders: Adding Zimbabwe to Your Itinerary',
      image: '/assets/images/placeholders/placeholder-5.jpg',
      link: '/packages/luxury-belmond-delta-victoria-falls',
    },
    {
      id: 'st-8',
      tag: 'TAILOR-MADE',
      title: 'How to Build Your Custom Safari Holiday with Safari Knight',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
      link: '/plan-your-trip',
    },
    {
      id: 'st-9',
      tag: 'SAFARI TIPS',
      title: 'What to Pack for Your First African Safari',
      image: '/assets/images/placeholders/placeholder-7.jpg',
      link: '/about',
    },
  ],
};
>>>>>>> Stashed changes
