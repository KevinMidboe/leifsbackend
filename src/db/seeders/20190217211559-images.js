'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [{
      filename: 'DSC_9029.png',
      adventure_id: 1,
      size: 2983546,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      filename: 'DSC_0505.png',
      adventure_id: 1,
      description: 'Dancing around the christmas tree',
      size: 10032272,
      album_order: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      filename: 'DSC_0509.png',
      adventure_id: 2,
      description: 'Se på den fisken der!',
      size: 8032272,
      album_order: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      filename: 'DSC_0510.png',
      adventure_id: 2,
      description: 'Noe i garnet!',
      size: 6373234,
      album_order: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

    // const adventure = await queryInterface.Sequelize.query(
    //   `SELECT id FROM adventure;`
    // );

    // const adventure = images[0];

    // return await queryInterface.bulkInsert('images')
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.bulkDelete('images', null, {});
  }
};
