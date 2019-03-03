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
        variations: {
          type: Sequelize.JSON,
          allowNull: true
        },
        album_order: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images')
  }
};
