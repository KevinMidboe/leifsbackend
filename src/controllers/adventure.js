const Adventure = require('../db/models').adventure;
const Location = require('../db/models').location;
const Image = require('../db/models').image;

// const { Adventure, Image, Location } = require('../db/sequelize')

const Op = require('sequelize').Op;

// module.exports = {

function location(req, res) {
  return Adventure
    .findAll({
      where: {
        'locationName': req.query.name
      },
      attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName']
      // order: [['title', 'ASC']]
    })
    .then(adventure => res.status(200).send(adventure))
    .catch(error => res.status(400).send(error))
}

function list(req, res) {
  return Adventure
    .findAll({
      attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName']
    })
    .then(adventure => res.status(200).send(adventure))
    .catch(error => res.status(400).send(error))
}

function get(req, res) {
  return Adventure
    .findByPk(req.params.id, {
      attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName']
    })
    .then(adventure => res.status(200).send(adventure))
    .catch(error => res.status(400).send(error));
}

function createLocation(req, res) {
  return Location
    .create({
      name: req.body.locationName,
      geoposition: req.body.geoposition
    })
}

// get form elements
function create(req, res) {
  console.log('adventure', Adventure)
  return createLocation(req, res)
    .then(() => Adventure
    .create({
      title: req.body.title,
      subtext: req.body.subtext,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      locationName: req.body.locationName,
    }, {}))
    .then(adventure => res.status(201).send(adventure))
    .catch(error => res.status(400).send(error))
}


module.exports = { location, list, get, create };