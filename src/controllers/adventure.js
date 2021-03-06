const Adventure = require('../db/models').adventure;
const Location = require('../db/models').location;
const Image = require('../db/models').image;

const Op = require('sequelize').Op;
const moment = require('moment');
const SORT_OPTIONS = ['asc', 'desc']

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
  let sortOption = SORT_OPTIONS[0];

  if (req.query.sort && SORT_OPTIONS.includes(req.query.sort)) {
    sortOption = req.query.sort;
  }

  return Adventure
    .findAll({
      attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName'],
      order: [
        ['dateStart', sortOption],
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

  const dateStart = moment.utc(req.body.dateStart, 'DD-MM-YYYY');
  const dateEnd = moment.utc(req.body.dateEnd, 'DD-MM-YYYY');

  Adventure.create({
    title: req.body.title,
    subtext: req.body.subtext,
    dateStart: dateStart,
    dateEnd: dateEnd,
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
