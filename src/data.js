export const LOCATIONS = [
  { name: 'Bankstown', address: 'Level 1, Bankstown Central, Stacey St, Bankstown 1885', hours: 'Mon-Wed 8am-5:30pm, Thu 8am-9:30pm, Fri-Sat 8am-5:30pm, Sun 9am-5pm', phone: '0476 164 868', email: 'oscar@gozlemeking.com.au', uber: 'https://www.ubereats.com/au/store/gozleme-king-bankstown/OV2uXzJpQ7SSubcZMZbkYQ' },
  { name: 'Sydney CBD', address: 'Level 1, Westfield Sydney Central Plaza, 450 George St, Sydney 2000', hours: 'Mon-Wed 7:30am-6pm, Thu 7:30am-9pm, Fri-Sat 7:30am-6pm, Sun 7:30am-5:30pm', phone: '0490 490 349', email: 'bozgun.fastfood@gmail.com', uber: 'https://www.ubereats.com/au/store/gozleme-king-sydney-cbd/PgirAXyCQNS96-ucJRPqmg' },
  { name: 'Liverpool', address: 'Level 2, Westfield Liverpool, Macquarie St, Liverpool 2170', hours: 'Mon-Wed 8am-5:30pm, Thu 8am-9:30pm, Fri 8am-5:30pm, Sat 8:30am-5:30pm, Sun 9am-5pm', phone: '0487 264 731', email: 'oscar@gozlemeking.com.au', uber: 'https://www.ubereats.com/au/store/gozleme-king-liverpool/ccpahdKWS4K4Pnye1TCAyw' },
  { name: 'Rhodes', address: 'Level 1, Rhodes Waterside, 1 Rider Boulevard, Rhodes 2138', hours: 'Mon-Wed 6:30am-5:30pm, Thu-Fri 6:30am-9pm, Sat 7am-9pm, Sun 8am-6:30pm', phone: '0473 449 307', email: 'koray@gozlemeking.com.au', uber: 'https://www.ubereats.com/au/store/gozleme-king-rhodes/7fYUGftETRSIMiGuJK5Irg' },
  { name: 'Blacktown', address: 'Level 1, Westpoint Blacktown, Patrick St, Blacktown 2148', hours: 'Mon-Wed 7:30am-5:30pm, Thu 7am-9pm, Fri 7am-5:30pm, Sat-Sun 7am-5pm', phone: '0413 461 364', email: 'blacktown@gozlemeking.com.au', uber: 'https://www.ubereats.com/au/store/gozleme-king-blacktown/t7kebw4bQWi1SQ5F_NxkPA' },
  { name: 'Top Ryde', address: 'Level 1, Top Ryde City Shopping Centre, Devlin St, Ryde 2112', hours: 'Mon-Wed 7:30am-6pm, Thu 7:30am-9pm, Fri-Sat 7:30am-6:30pm, Sun 7:30am-6pm', phone: '0416 800 800', email: 'topryde@gozlemeking.com.au', uber: 'https://www.ubereats.com/au/store/gozleme-king-top-ryde/phfM4OKDSCeWxSEsXxLSpA' },
  { name: 'Hurstville', address: 'Level 3, Westfield Hurstville, Park Rd & Cross St, Hurstville 2220', hours: 'Mon-Wed 8am-5pm, Thu 8am-9:30pm, Fri-Sat 8am-5pm, Sun 9am-5pm', phone: '0481 812 944', email: 'hurstville@gozlemeking.com.au', uber: 'https://www.ubereats.com/au/store/gozleme-king-hurstville/hbFHbcP2WLWcNElv9U8znw' },
  { name: 'Circular Quay', address: 'Shop G05, Ground Floor, Gateway, 1 Macquarie Pl, Sydney 2000', hours: 'Mon-Wed 7:30am-6pm, Thu 7:30am-9pm, Fri-Sat 7:30am-6:30pm, Sun 7:30am-6pm', phone: '0451 900 380', email: 'gkcq2000@gmail.com', uber: 'https://www.ubereats.com/au/store/gozleme-king-circular-quay/CbFoMCe5Q0aEHFNxun94ZA' },
  { name: 'Penrith', address: 'Nepean Village, Woodriff St, Penrith 2750', hours: 'Mon-Sun 9am-9:30pm', phone: '0426 830 610', email: 'koray@gozlemeking.com.au', uber: 'https://www.ubereats.com/store/gozleme-king-kebabs-and-grill-penrith/F8AfNOLLXG2FNV9JIxtkEA' },
]

export const PHILOSOPHY = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'Only the finest quality Australian produce from our carefully selected suppliers, delivered fresh daily.' },
  { icon: '👨‍🍳', title: 'Made to Order', desc: 'Every gözleme is prepared right in front of you — watch the entire process from start to finish.' },
  { icon: '🤲', title: 'Handmade Dough', desc: 'Our dough is prepared fresh every single day. Each ball is hand-rolled to the perfect serving size.' },
  { icon: '⭐', title: 'Customer First', desc: 'Your satisfaction drives everything we do. We constantly evolve based on your feedback.' },
]

export const MENU_SECTIONS = [
  {
    id: 'gozleme',
    label: 'Gözleme',
    heading: 'Our Signature Gözleme',
    intro: 'Hand-rolled fresh every morning and filled to order, right before your eyes.',
    items: [
      { name: 'Spinach & Feta', desc: 'Fresh spinach and crumbly feta cheese folded into golden hand-rolled dough', badges: ['V'] },
      { name: 'Cheese', desc: 'A blend of premium cheeses melted inside crispy flatbread', badges: ['V'] },
      { name: 'Chicken', desc: 'Seasoned chicken with fresh vegetables wrapped in hand-rolled dough' },
      { name: 'Lamb', desc: 'Slow-cooked seasoned lamb with herbs and spices' },
      { name: 'Mushroom', desc: 'Fresh mushrooms with herbs and melted cheese', badges: ['V'] },
      { name: 'Potato', desc: 'Seasoned potato filling with herbs and spices', badges: ['V'] },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts & Sweets',
    heading: 'Sweet Endings',
    intro: 'Traditional Turkish desserts made the way they have been for generations.',
    items: [
      { name: 'Künefe', desc: 'Cheese-filled shredded kadayif dough soaked in sweet syrup, topped with pistachios', badges: ['Vegan available'], featured: true },
      { name: 'Nutella Gözleme', desc: 'Warm hand-rolled dough filled with melted Nutella — a sweet twist on the classic' },
      { name: 'Baklava', desc: 'Layers of filo pastry with chopped nuts, held together with honey syrup' },
      { name: 'Nutella Baklava', desc: 'Our signature baklava taken to the next level with rich Nutella' },
      { name: 'Tres Leches Cake', desc: 'Sponge cake soaked in three kinds of milk: evaporated, condensed and cream' },
      { name: 'Turkish Delight', desc: "Imported straight from Turkey's Grand Bazaar — the highest quality lokum" },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    heading: 'Beverages',
    intro: 'The traditional way to finish — or start — any Turkish meal.',
    items: [
      { name: 'Turkish Tea', desc: 'Traditional black tea, served in a classic tulip glass' },
      { name: 'Ayran', desc: 'Refreshing Turkish yoghurt drink — the perfect match for any gözleme' },
      { name: 'Soft Drinks & Water', desc: 'A selection of chilled soft drinks and bottled water' },
    ],
  },
]

export const CATERING_PACKAGES = [
  { name: 'Office Package', desc: 'Perfect for team lunches and meetings. Custom gözleme platters with a mix of fillings to suit everyone.', serves: '10-20 people' },
  { name: 'Event Package', desc: 'Ideal for corporate events, parties, and celebrations. Includes a variety of gözleme, sides, and desserts.', serves: '20-50 people' },
  { name: 'Custom Package', desc: 'Have something specific in mind? We work with you to create a tailored catering solution for any occasion.', serves: 'Any size' },
]
