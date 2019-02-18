'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('locations', [{
      name: 'Rosendalsveien 50b, 1166 Oslo, Norway',
      geoposition: '59.853973, 10.799471',
      mapboxData: '{"id":"address.3598204582760676","type":"Feature","place_type":["address"],"relevance":1,"properties":{"accuracy":"point"},"text":"Rosendalsveien","place_name":"Rosendalsveien50b,1166Oslo,Norway","center":[10.799471,59.853973],"geometry":{"type":"Point","coordinates":[10.799471,59.853973]},"address":"50b","context":[{"id":"postcode.9489910510813950","text":"1166"},{"id":"place.17289044417596980","short_code":"NO-03","wikidata":"Q585","text":"Oslo"},{"id":"country.16020050790143780","short_code":"no","wikidata":"Q20","text":"Norway"}]}',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Karmøy, Rogaland, Norge',
      geoposition: '59.2744, 5.2884',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {});
  }
};
