'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      discount: {
        type: Sequelize.DataTypes.FLOAT,
        defaultValue: 0
      },
      stock: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
