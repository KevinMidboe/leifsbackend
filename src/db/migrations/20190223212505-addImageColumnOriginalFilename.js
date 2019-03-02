'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'images',
      'original_filename',
      {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
        after: 'filename'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('images', 'original_filename')
  }
};
