'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DeliveryAgents', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      vehichleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'DeliveryVehicles',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.bulkInsert('DeliveryAgents', [
      {
        name: 'SAMER Q',
        vehichleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'BASIL A',
        vehichleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('DeliveryAgents');
  },
};
