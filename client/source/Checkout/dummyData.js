const dummyData = [
  {
    name: 'Mister Mario',
    city: 'Luigi City',
    street: '1234 Rainbow Road',
    zipcode: '12345',
    state: 'MushroomKingdom',
    cardNumber: '123456789012',
    provider: 'MushPay',
    cart: {
      items: [
        {
          type: 'ingredient',
          name: 'Organic Avocados',
          price: '3.99',
          image: 'http://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_86775112fuerte_1024x1024.jpg?v=1531930073',
          quantity: 1,
        },
        {
          type: 'ingredient',
          name: 'Organic Oranges',
          price: '3.99',
          image: 'https://cdn11.bigcommerce.com/s-99si0d/images/stencil/400x400/products/1142/46198/Pure-Orange-Citrus-Fragrance-oil__92132.1443037777.jpg?c=2',
          quantity: 3,
        },
        {
          type: 'ingredient',
          name: 'Banza Chickpea Rotini Pasta',
          price: '5.00',
          image: 'https://goodeggs4.imgix.net/d6fb8b07-f32b-4cf4-9c7c-574348910621.jpg?w=840&h=525&fm=jpg&q=80&fit=crop',
          quantity: 1,
        },
        {
          type: 'meal',
          name: 'Chick Pea Soup',
          price: '30.00',
          image: 'https://anitalianinmykitchen.com/wp-content/uploads/2018/10/hearty-chickpea-soup-550-1-of-1-500x500.jpg',
          quantity: 10,
        },
        {
          type: 'meal',
          name: 'Chick Pea Soup',
          price: '30.00',
          image: 'https://anitalianinmykitchen.com/wp-content/uploads/2018/10/hearty-chickpea-soup-550-1-of-1-500x500.jpg',
          quantity: 10,
        }
      ]
    }
  }
];

module.exports={
  dummyData,
};
