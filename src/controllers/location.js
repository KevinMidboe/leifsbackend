const Location = require('../db/models').location;
const Adventure = require('../db/models').adventure;

// const { Adventure, Location } = require('../db/sequelize')

const Op = require('sequelize').Op;

function list(req, res) {
  const name = req.query.name;
  console.log('param name:', name)

  if (name) {
    return getByName(req, res, name)
  }

  return Location
    .findAll({
      attributes: ['name', 'geoposition', 'mapboxData']
    })
    .then(Location => res.status(200).send(Location))
    .catch(error => res.status(400).send(error))
}

function getByName(req, res, name) {
  return Location
    .findOne({
      where: { name },
      attributes: ['name', 'geoposition', 'mapboxData']
    })
    .then(Location => res.status(200).send(Location))
    .catch(error => res.status(400).send(error))
}

module.exports = { list };