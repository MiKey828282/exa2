'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      admin: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      address: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
      phone: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING(120),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};