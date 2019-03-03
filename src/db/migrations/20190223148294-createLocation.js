'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: { 
          type: Sequelize.STRING, 
          allowNull: false 
        },
        geoposition: { 
          type: Sequelize.STRING, 
          allowNull: true, 
          defaultValue: null
        },
        mapboxData: {
          type: Sequelize.JSON,
          allowNull: true,
          defaultValue: null
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
    return queryInterface.dropTable('locations')
  }
};
