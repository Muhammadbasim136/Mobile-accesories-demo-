export const categories = [
  { id: 1, name: 'Wireless Earbuds', count: 24, image: '/images/cat-earbuds.jpg', slug: 'earbuds' },
  { id: 2, name: 'Power Banks', count: 18, image: '/images/cat-powerbank.jpg', slug: 'power-banks' },
  { id: 3, name: 'Fast Chargers & Cables', count: 32, image: '/images/cat-chargers.jpg', slug: 'chargers' },
  { id: 4, name: 'Phone Cases & Covers', count: 56, image: '/images/cat-cases.jpg', slug: 'cases' },
  { id: 5, name: 'Bluetooth Speakers', count: 15, image: '/images/cat-speakers.jpg', slug: 'speakers' },
  {
    id: 6, name: 'Screen Protectors', count: 28,
    image: '/images/cat-cases.jpg', slug: 'screen-protectors'
  },
  {
    id: 7, name: 'Car Chargers & Mounts', count: 20,
    image: '/images/cat-chargers.jpg', slug: 'car-accessories'
  },
  {
    id: 8, name: 'Smartwatches', count: 12,
    image: '/images/cat-speakers.jpg', slug: 'smartwatches'
  },
];

export const featuredProducts = [
  {
    id: 101,
    name: 'TT AirBeat Pro Wireless Earbuds',
    price: 3499,
    originalPrice: 5299,
    discount: 34,
    image: '/images/cat-earbuds.jpg',
    image2: '/images/cat-earbuds.jpg',
    category: 'earbuds',
    badge: '34% OFF',
    colors: [],
  },
  {
    id: 102,
    name: 'TT PowerMax 20000mAh Power Bank',
    price: 4999,
    originalPrice: 7499,
    discount: 33,
    image: '/images/cat-powerbank.jpg',
    image2: '/images/cat-powerbank.jpg',
    category: 'power-banks',
    badge: 'BEST SELLER',
    colors: [],
  },
  {
    id: 103,
    name: 'TitanShield Armor Case',
    price: 1299,
    originalPrice: 1899,
    discount: 32,
    image: '/images/cat-cases.jpg',
    image2: '/images/cat-cases.jpg',
    category: 'cases',
    badge: '32% OFF',
    colors: ['#1a1a2e', '#2563eb', '#e5e7eb'],
  },
  {
    id: 104,
    name: 'TT RapidCharge 65W GaN Wall Charger',
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    image: '/images/cat-chargers.jpg',
    image2: '/images/cat-chargers.jpg',
    category: 'chargers',
    badge: 'HOT',
    colors: [],
  },
  {
    id: 105,
    name: 'TT BassBoom Portable Speaker',
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    image: '/images/cat-speakers.jpg',
    image2: '/images/cat-speakers.jpg',
    category: 'speakers',
    badge: '33% OFF',
    colors: ['#1a1a2e', '#dc2626', '#16a34a'],
  },
  {
    id: 106,
    name: 'NanoShield 9H Glass Protector (2-Pack)',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: '/images/cat-chargers.jpg',
    image2: '/images/cat-chargers.jpg',
    category: 'screen-protectors',
    badge: '40% OFF',
    colors: [],
  },
  {
    id: 107,
    name: 'TT FlexMount 360° Car Holder',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: '/images/cat-powerbank.jpg',
    image2: '/images/cat-powerbank.jpg',
    category: 'car-accessories',
    badge: '33% OFF',
    colors: [],
  },
  {
    id: 108,
    name: 'TT Braided USB-C Cable (2-Pack)',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: '/images/cat-chargers.jpg',
    image2: '/images/cat-chargers.jpg',
    category: 'chargers',
    badge: '31% OFF',
    colors: ['#1a1a2e', '#dc2626', '#16a34a'],
  },
];

export const bestSelling = {
  earbuds: [
    {
      id: 201, name: 'TT AirBeat Pro Wireless Earbuds', price: 3499, originalPrice: 5299, discount: 34,
      image: '/images/cat-earbuds.jpg',
      image2: '/images/hero-1.jpg',
      badge: 'BEST SELLER', colors: [],
    },
    {
      id: 202, name: 'TT NeckFit Pro Neckband', price: 1999, originalPrice: 2999, discount: 33,
      image: '/images/promo-earbuds.jpg',
      image2: '/images/hero-3.jpg',
      badge: '33% OFF', colors: [],
    },
    {
      id: 203, name: 'TT Sport Buds IPX5 Waterproof', price: 2499, originalPrice: 3499, discount: 29,
      image: '/images/hero-1.jpg',
      image2: '/images/cat-earbuds.jpg',
      badge: 'NEW', colors: [],
    },
    {
      id: 204, name: 'TT Crystal Clear In-Ear Monitors', price: 1799, originalPrice: 2499, discount: 28,
      image: '/images/hero-3.jpg',
      image2: '/images/promo-earbuds.jpg',
      badge: '28% OFF', colors: [],
    },
  ],
  powerbanks: [
    {
      id: 205, name: 'TT PowerMax 20000mAh Power Bank', price: 4999, originalPrice: 7499, discount: 33,
      image: '/images/cat-powerbank.jpg',
      image2: '/images/promo-powerbank.jpg',
      badge: 'BEST SELLER', colors: [],
    },
    {
      id: 206, name: 'TT Compact 10000mAh Slim Bank', price: 2499, originalPrice: 3999, discount: 38,
      image: '/images/hero-2.jpg',
      image2: '/images/cat-chargers.jpg',
      badge: '38% OFF', colors: [],
    },
    {
      id: 207, name: 'TT MagPower 15W Wireless Bank', price: 5999, originalPrice: 8499, discount: 29,
      image: '/images/promo-powerbank.jpg',
      image2: '/images/hero-2.jpg',
      badge: 'HOT', colors: [],
    },
    {
      id: 208, name: 'TT SolarBoost 30000mAh Bank', price: 7499, originalPrice: 10999, discount: 32,
      image: '/images/cat-chargers.jpg',
      image2: '/images/cat-powerbank.jpg',
      badge: '32% OFF', colors: [],
    },
  ],
  speakers: [
    {
      id: 209, name: 'TT BassBoom Portable Speaker', price: 3999, originalPrice: 5999, discount: 33,
      image: '/images/cat-speakers.jpg',
      image2: '/images/hero-3.jpg',
      badge: 'BEST SELLER', colors: [],
    },
    {
      id: 210, name: 'TT MiniBlast Pocket Speaker', price: 1799, originalPrice: 2599, discount: 31,
      image: '/images/hero-3.jpg',
      image2: '/images/cat-speakers.jpg',
      badge: '31% OFF', colors: [],
    },
    {
      id: 211, name: 'TT HomeSurround 360° Speaker', price: 6999, originalPrice: 9999, discount: 30,
      image: '/images/promo-earbuds.jpg',
      image2: '/images/cat-speakers.jpg',
      badge: 'PREMIUM', colors: [],
    },
    {
      id: 212, name: 'TT OutdoorRock Waterproof Speaker', price: 4499, originalPrice: 6499, discount: 31,
      image: '/images/hero-1.jpg',
      image2: '/images/cat-speakers.jpg',
      badge: '31% OFF', colors: [],
    },
  ],
};

export const newArrivals = [
  {
    id: 301, name: 'TT Orbit MagSafe Charging Stand', price: 3499, originalPrice: 4999, discount: 30,
    image: '/images/hero-2.jpg',
    image2: '/images/cat-powerbank.jpg',
    badge: 'NEW', colors: [],
  },
  {
    id: 302, name: 'TT Stealth Matte Case', price: 1499, originalPrice: 1999, discount: 25,
    image: '/images/cat-cases.jpg',
    image2: '/images/hero-3.jpg',
    badge: 'NEW', colors: ['#1a1a2e', '#6b7280', '#e5e7eb'],
  },
  {
    id: 303, name: 'TT AirFlow ANC Neckband', price: 2999, originalPrice: 4499, discount: 33,
    image: '/images/cat-earbuds.jpg',
    image2: '/images/cat-speakers.jpg',
    badge: 'NEW', colors: [],
  },
  {
    id: 304, name: 'TT Compact 10000mAh Power Bank', price: 2499, originalPrice: 3999, discount: 38,
    image: '/images/cat-powerbank.jpg',
    image2: '/images/cat-chargers.jpg',
    badge: 'NEW', colors: [],
  },
];

export const testimonials = [
  {
    id: 1, name: 'Ahmed Raza', location: 'Lahore', rating: 5,
    text: 'Ordered TT AirBeat Pro and got it in just 2 days! Amazing sound quality and the packaging was premium. Cash on delivery made it super easy. Will definitely order again!',
    avatar: 'AR',
  },
  {
    id: 2, name: 'Fatima Khan', location: 'Karachi', rating: 5,
    text: 'The PowerMax 20000mAh is a beast! Charges my phone 6 times on a single charge. Great value for money and fast nationwide delivery. 10/10 recommend Tech-Trends!',
    avatar: 'FK',
  },
  {
    id: 3, name: 'Bilal Mahmood', location: 'Islamabad', rating: 5,
    text: 'Bought the TitanShield case and NanoShield protector together. Perfect fit, looks premium, and the price is unbeatable. WhatsApp support helped me choose the right size!',
    avatar: 'BM',
  },
  {
    id: 4, name: 'Sara Malik', location: 'Faisalabad', rating: 5,
    text: 'Tech-Trends has the best prices in Pakistan! The GaN charger charges my laptop and phone simultaneously. Quality is top notch. Paid via JazzCash — super smooth!',
    avatar: 'SM',
  },
  {
    id: 5, name: 'Usman Ali', location: 'Rawalpindi', rating: 5,
    text: 'BassBoom speaker is incredible! Perfect for outdoor use. Ordered during a sale and saved thousands. Customer service on WhatsApp was very helpful and responsive.',
    avatar: 'UA',
  },
];

export const faqs = [
  {
    q: 'Are your products compatible with all smartphone models?',
    a: 'Yes! Our accessories are designed for universal compatibility. Chargers and cables work with all USB-C, Lightning, and Micro-USB devices. Cases are listed by model — just select your phone model during checkout. If unsure, chat with us on WhatsApp!',
  },
  {
    q: 'Do you offer Cash on Delivery?',
    a: 'Absolutely! We offer Cash on Delivery (COD) nationwide across Pakistan — Karachi, Lahore, Islamabad, and all other cities. You can also pay via JazzCash or EasyPaisa for extra convenience.',
  },
  {
    q: 'What is your replacement and warranty policy?',
    a: 'We offer a 7-day easy replacement guarantee on all products. If you receive a defective item, simply contact us on WhatsApp with a video showing the issue within 7 days, and we\'ll arrange a replacement at no extra cost.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery typically takes 2–4 business days to major cities (Karachi, Lahore, Islamabad) and 3–5 business days to other cities across Pakistan. Express same-day/next-day delivery is available in select cities.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order is dispatched, you\'ll receive a tracking number via SMS/WhatsApp. Use the "Track Order" link in the navigation to check your delivery status anytime. Our support team is also available 24/7 on WhatsApp for order updates.',
  },
];
