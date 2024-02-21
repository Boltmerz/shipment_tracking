'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shipments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructions: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM(
          'PENDING',
          'SCHEDULED',
          'IN_TRANSIT',
          'DELIVERED',
          'CANCELLED',
        ),
        allowNull: true,
        defaultValue: 'PENDING',
      },
      route: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructions: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryAgentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'DeliveryAgents',
          key: 'id',
        },
      },
      deliveryScheduleId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'DeliverySchedules',
          key: 'id',
        },
      },
      deliveryVehicleTypeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'DeliveryVehichleTypes',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
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

    await queryInterface.addIndex('Shipments', ['status']);
    await queryInterface.addIndex('Shipments', ['userId']);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Shipments');
  },
};
