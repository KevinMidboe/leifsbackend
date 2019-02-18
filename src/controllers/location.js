const Location = require('../db/models').location;
const Adventure = require('../db/models').adventure;

// const { Adventure, Location } = require('../db/sequelize')

const Op = require('sequelize').Op;

module.exports = {

  list(req, res) {
    return Location
      .findAll({
        attributes: ['name', 'geoposition', 'mapboxData']
      })
      // .then(Location => Adventure.findAll({
      //   where: { 'locationName': Location.name },
      //   attributes: [ 'title', 'subtext', 'dateStart', 'dateEnd', 'location.geoposition' ]
      // }))
      .then(Location => res.status(200).send(Location))
      .catch(error => res.status(400).send(error))
  },
};