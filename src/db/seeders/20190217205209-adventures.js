'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('adventures', [{
      title: 'Jul 2019',
      dateStart: '2019-12-24',
      dateEnd: '2019-12-24',
      locationName: 'Rosendalsveien 50b, 1166 Oslo, Norway',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fisketur på Karmøy',
      subtext: 'Flott tur rundt påsketider 🌞',
      dateStart: '2019-04-12',
      dateEnd: '2019-04-16',
      locationName: 'Karmøy, Rogaland, Norge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Havfiskeforeningen til karmøy!',
      subtext: 'Vi er her for å herje! :D',
      dateStart: '2019-05-01',
      dateEnd: '2019-05-04',
      locationName: 'Karmøy, Rogaland, Norge',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.bulkDelete('adventures', null, {});
  }
};
