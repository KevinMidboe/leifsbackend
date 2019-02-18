'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('imagevariations', [{
      'image_id': 4,
      'thumb': false,
      'md': true,
      'lg': true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.bulkDelete('imagevariations', null, {});
  }
};
