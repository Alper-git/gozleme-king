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
    heading: 'Our Gözleme',
    intro: 'Hand-rolled fresh every morning and filled to order, right before your eyes. Add your favourite dip — mint yogurt, guacamole or peri mayo.',
    groups: [
      {
        title: 'Breakfast All Day',
        items: [
          { name: 'Zaatar & Feta', desc: 'Mix of herbs and feta cheese', badges: ['V'] },
          { name: 'Sucuk', desc: 'Turkish sausage, feta cheese and egg' },
          { name: 'Feta, Mushroom & Egg', desc: 'A classic breakfast trio folded into hand-rolled dough' },
          { name: 'The Big Breakfast', desc: 'Feta cheese, mushroom and egg gözleme with a side of fresh avocado, tomatoes, cucumbers and Kalamata olives' },
        ],
      },
      {
        title: 'Vegetarian',
        items: [
          { name: 'Classic Cheese', desc: 'Our special cheese blend', badges: ['V'] },
          { name: 'Feta & Spinach', desc: 'Feta cheese and English spinach', badges: ['V'] },
          { name: 'Vegetarian', desc: 'Feta cheese, English spinach and mushroom', badges: ['V'] },
          { name: 'Marinated Chilli Potato', desc: 'Feta cheese and chilli marinated potato', badges: ['V', 'Spicy'] },
          { name: 'Veggie Plus', desc: 'Feta cheese, English spinach, mushroom, capsicum and Kalamata olives', badges: ['V'] },
          { name: 'Hot & Spicy Veggie', desc: 'Feta cheese, English spinach, corn, jalapeños, mushroom, capsicum, Spanish onion and Kalamata olives', badges: ['V', 'Spicy'] },
        ],
      },
      {
        title: 'Beef',
        items: [
          { name: 'Combination', desc: 'Feta cheese, English spinach and traditional beef' },
          { name: 'Mojo Beef', desc: "Feta cheese, English spinach, beef infused with our secret 'Mojo' sauce" },
          { name: 'The Lot', desc: 'Feta cheese, English spinach, beef and mushroom' },
          { name: 'The Bull Fighter', desc: 'Feta cheese, English spinach, beef chorizo (sucuk), Spanish onion and capsicum infused with special Spanish sauce' },
        ],
      },
      {
        title: 'Chicken',
        items: [
          { name: 'Mojo Chicken', desc: "Feta cheese, English spinach, chicken breast infused with our secret 'Mojo' sauce" },
          { name: 'Peri Peri Chicken', desc: 'Feta cheese, English spinach, Peri-Peri chicken and a side of peri mayo', badges: ['Spicy'] },
          { name: 'Chicken & Mushroom', desc: 'Cheese, seasoned chicken and mushroom' },
          { name: 'Tandoori Chicken', desc: 'Feta cheese, English spinach, Spanish onion, tandoori chicken and a side of mint yogurt' },
        ],
      },
      {
        title: 'Signature',
        items: [
          { name: 'Gourmet Lamb', desc: 'Feta cheese, English spinach, marinated lamb and a side of mint yogurt' },
          { name: 'BBQ Meat Lovers', desc: 'Feta cheese, beef, chicken and sucuk infused with BBQ sauce' },
          { name: 'Mucho Mexicana', desc: 'Feta cheese, English spinach, beef or chicken, corn kernels, jalapeños and a side of guacamole', badges: ['Spicy'] },
        ],
      },
      {
        title: 'Dessert Gözlemes',
        items: [
          { name: 'Banana Buzz', desc: 'Caramelised banana, warm honey, topped with icing sugar' },
          { name: 'Nutella Dream', desc: 'Filled with Nutella, topped with icing sugar' },
          { name: 'Biscoff', desc: 'Original Biscoff spread sprinkled with original Biscoff pieces', badges: ['V'] },
        ],
      },
    ],
  },
  {
    id: 'bowls',
    label: 'Bowls & Wraps',
    heading: 'Healthy Bowls & Wraps',
    intro: 'All ingredients grilled fresh while you wait.',
    groups: [
      {
        title: 'Healthy Bowls',
        items: [
          { name: 'Hot & Spicy Veggie Bowl', desc: 'Two eggs, spinach, feta, chilli potato, mushroom, capsicum, corn and jalapeño', badges: ['V', 'Spicy'] },
          { name: 'Mojo Bowl', desc: 'Choice of minced beef or chicken infused with secret Mojo sauce, spinach, feta, corn and capsicum — topped with tzatziki sauce' },
          { name: 'Chicken Bowl', desc: 'Grilled chicken, spinach, feta, capsicum and grilled mushroom' },
          { name: 'Peri Bowl', desc: 'Choice of beef mince or chicken, spinach, feta, mushroom and Spanish onion — topped with peri sauce', badges: ['Spicy'] },
        ],
      },
      {
        title: 'Gözleme Wraps',
        note: 'Make it a combo — any wrap with a small coffee or tea.',
        items: [
          { name: 'Sucuk Wrap', desc: 'Feta, sucuk and scrambled egg' },
          { name: 'Veggie Wrap', desc: 'Feta, cucumber, avocado and tomato', badges: ['V'] },
          { name: 'Spinach Wrap', desc: 'Feta, spinach and scrambled egg', badges: ['V'] },
          { name: 'Zataar Wrap', desc: 'Feta and zataar (oregano)', badges: ['V'] },
          { name: 'Egg Wrap', desc: 'Feta and scrambled egg', badges: ['V'] },
        ],
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    heading: 'Traditional Breakfasts',
    intro: 'The way breakfast is done in Türkiye — generous, fresh, and always with Turkish tea.',
    items: [
      { name: 'Turkish Breakfast', desc: 'Two fried eggs, sucuk, olives, tomato, cucumber, feta, jam & butter and bread — served with Turkish tea' },
      { name: 'Mediterranean Breakfast', desc: 'Two fried eggs, sucuk, tomato, olives, cucumber, feta and zataar bread — served with Turkish tea' },
      { name: 'Vegetarian Breakfast', desc: 'Two fried eggs, mushroom, avocado, tomato, olives, cucumber, feta, yogurt and bread — served with Turkish tea', badges: ['V'] },
      { name: 'Home Made Lentil Soup', desc: 'Traditional Turkish lentil soup, made fresh in store and served hot', badges: ['V'] },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts & Drinks',
    heading: 'Sweet Endings',
    intro: 'Traditional Turkish desserts made the way they have been for generations.',
    items: [
      { name: 'Künefe', desc: 'Cheese-filled shredded kadayif dough soaked in sweet syrup, topped with pistachios', badges: ['Vegan available'], featured: true },
      { name: 'Turkish Delight', desc: "Imported straight from Turkey's Grand Bazaar — the highest quality lokum" },
      { name: 'Cakes by Pasticceria Papa', desc: 'A rotating selection of cakes — see our display case in store' },
    ],
    drinks: [
      { name: 'Turkish Tea', desc: 'Traditional black tea, served in a classic tulip glass' },
      { name: 'GK Espresso Bar', desc: 'Barista-made coffee, available at all locations' },
      { name: 'Soft Drinks & Water', desc: 'A selection of chilled soft drinks and bottled water' },
    ],
  },
]

export const CATERING_PACKAGES = [
  { name: 'Office Package', desc: 'Perfect for team lunches and meetings. Custom gözleme platters with a mix of fillings to suit everyone.', serves: '10-20 people' },
  { name: 'Event Package', desc: 'Ideal for corporate events, parties, and celebrations. Includes a variety of gözleme, sides, and desserts.', serves: '20-50 people' },
  { name: 'Custom Package', desc: 'Have something specific in mind? We work with you to create a tailored catering solution for any occasion.', serves: 'Any size' },
]
