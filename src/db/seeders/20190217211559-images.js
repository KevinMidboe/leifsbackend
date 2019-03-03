'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [{
      filename: '686f90d2dae64d979d5c2df0a866d286.jpg',
      adventure_id: 1,
      // size: 2983546,
      album_order: 0,
      variations: '{"sizes":["thumb","sm","md","lg"]}',
      folder: '/Users/kevinmidboe/python/leifs-image-processor/assets',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      filename: '41baeb62842d4b99a71ba6cdabf09e7c.jpg',
      adventure_id: 1,
      description: 'Dancing around the christmas tree',
      // size: 10032272,
      album_order: 1,
      variations: '{"sizes":["thumb","sm","md","lg"]}',
      folder: '/Users/kevinmidboe/python/leifs-image-processor/assets',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      filename: '5de304186ef4439e814c5eca3fe03a4c.jpg',
      adventure_id: 2,
      description: 'Se på den fisken der!',
      // size: 8032272,
      album_order: 1,
      variations: '{"sizes":["thumb","sm","md","lg"]}',
      folder: '/Users/kevinmidboe/python/leifs-image-processor/assets',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      filename: '42531f99132e414a81d6d21d97e77082.jpg',
      adventure_id: 2,
      description: 'Noe i garnet!',
      // size: 6373234,
      album_order: 0,
      variations: '{"sizes":["thumb","sm","md","lg"]}',
      folder: '/Users/kevinmidboe/python/leifs-image-processor/assets',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.bulkDelete('images', null, {});
  }
};
