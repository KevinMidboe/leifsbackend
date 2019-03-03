const Adventure = require('../db/models').adventure;
const Location = require('../db/models').location;
const Image = require('../db/models').image;

const Op = require('sequelize').Op;

function location(req, res) {
  return Adventure
    .findAll({
      where: {
        'locationName': req.query.name
      },
      attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName']
    })
    .then(adventure => res.status(200).send(adventure))
    .catch(error => res.status(400).send(error))
}

function list(req, res) {
  return Adventure
    .findAll({
      attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName'],
      order: [
        ['dateStart', 'ASC'],
      ]
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
  const geoposition = `${req.body.geoposition[0]}, ${req.body.geoposition[1]}`
  console.log('creatingLocation', geoposition)

  return Location
    .create({
      name: req.body.locationName,
      geoposition: geoposition,
      mapboxData: req.body.mapboxData
    })
    .catch((err) => console.error(err))
}

// get form elements
function create(req, res) {
  console.log('Received req body for create:', req.body)

  Adventure.create({
    title: req.body.title,
    subtext: req.body.subtext,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
    locationName: req.body.locationName,
  }, {})
  .then(() => createLocation(req, res))
  .then(adventure => res.status(201).send(adventure))
  .catch(error => {
    console.log('Error when adding adventure', error)
    res.status(400).send('Something went wrong')
  })
}


module.exports = { location, list, get, create };
