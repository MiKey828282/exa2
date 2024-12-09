'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Cliente ',
        lastname: 'Prueba',
        address: '',
        phone: '1234567890',
        email: 'cliente@example.com',
      },
      {
        admin: true,
        name: 'Admin',
        lastname: 'Prueba',
        address: '',
        phone: '9876543210',
        email: 'admin@example.com',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
