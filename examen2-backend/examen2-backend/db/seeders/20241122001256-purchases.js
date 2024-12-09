'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('purchases', [
      {
        userId: 1,
        productId: 1,
        quantity: 2,
        totalPrice: 200.00,
        purchaseDate: new Date(),
      },
      {
        userId: 1,
        productId: 2,
        quantity: 1,
        totalPrice: 100.00,
        purchaseDate: new Date(),
      },
      {
        userId: 2,
        productId: 1,
        quantity: 1,
        totalPrice: 100.00,
        purchaseDate: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('purchases', null, {});
  }
};
