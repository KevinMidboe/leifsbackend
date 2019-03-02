'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('adventures',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING,
          notNull: true
        },
        subtext: {
          type: Sequelize.TEXT,
          notNull: false,
          default: null
        },
        dateStart: {
          type: Sequelize.DATE,
          notNull: true
        },
        dateEnd: {
          type: Sequelize.DATE,
          notNull: true
        },
        locationName: {
          type: Sequelize.STRING,
          notnull: false,
          default: null
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
    return queryInterface.dropTable('Adventures')
  }
};
