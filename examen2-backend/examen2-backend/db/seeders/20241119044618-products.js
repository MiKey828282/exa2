'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Oso de peluche',
        description: 'Oso de peluche color café de 30cm de altura.',
        price: 100,
        discount: 10,
        stock: 15,
        image: 'https://i.pinimg.com/736x/58/72/9a/58729a76aacc6a5d9de20462bb19b4ad.jpg',
    },
    {
      name: 'Carro Infantil',
      description: 'Carro Infantil color rojo. Soporta 40kg',
      price: 1500,
      stock: 10,
      image: 'https://i.pinimg.com/736x/5b/6a/62/5b6a6297069af1285ffc01ef91a93e6c.jpg',
  },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
