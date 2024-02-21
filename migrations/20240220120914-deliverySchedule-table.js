'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DeliverySchedules', {
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
      StartsAt: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      EndsAt: {
        type: Sequelize.TIME,
        allowNull: false,
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

    await queryInterface.bulkInsert('DeliverySchedules', [
      {
        name: 'Morning',
        StartsAt: '08:00:00',
        EndsAt: '12:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Afternoon',
        StartsAt: '12:00:00',
        EndsAt: '16:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('DeliverySchedules');
  },
};
