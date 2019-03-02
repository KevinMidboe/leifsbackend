'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        filename: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        adventure_id: {
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        size: {
          type: Sequelize.DOUBLE,
          allowNull: true
        },
        album_order: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images')
  }
};
