'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      startyear: {
        type: Sequelize.INTEGER,
      },
      endyear: {
        type: Sequelize.INTEGER,
      },
      numberOfMonths: {
        type: Sequelize.INTEGER,
      },
      ausbildungId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Details',
          key: 'id',
          as: 'ausbildungId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Details');
  },
};
