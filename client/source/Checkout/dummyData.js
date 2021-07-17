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
          price: 4.05,
          image: 'https://spoonacular.com/cdn/ingredients_500x500/avocado.jpg',
          quantity: 1,
        },
        {
          type: 'ingredient',
          name: 'Organic Oranges',
          price: 3.99,
          image: 'https://cdn11.bigcommerce.com/s-99si0d/images/stencil/400x400/products/1142/46198/Pure-Orange-Citrus-Fragrance-oil__92132.1443037777.jpg?c=2',
          quantity: 1,
        },
        {
          type: 'ingredient',
          name: 'Goat Cheese',
          price: 7.09,
          image: 'https://spoonacular.com/cdn/ingredients_500x500/goat-cheese.jpg',
          quantity: 1,
        },
        {
          name: 'Cinnamon',
          price: 4.89,
          image: 'https://spoonacular.com/cdn/ingredients_500x500/cinnamon.jpg',
        },
      ]
    }
  }
];

module.exports={
  dummyData,
};
