const Adventure = require('../db/models').adventure;
// const { Adventure } = require('../db/sequelize')

const Op = require('sequelize').Op;

module.exports = {

  location(req, res) {
    return Adventure
      .findAll({
        where: { [Op.not]: { locationName: null } }
      })
      .then(adventure => res.status(200).send(adventure))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    return Adventure
      .findAll({
        attributes: ['id', 'title', 'subtext', 'dateStart', 'dateEnd', 'locationName']
      })
      .then(adventure => res.status(200).send(adventure))
      .catch(error => res.status(400).send(error))
  },

  get(req, res) {
    return Adventure
      .findById(req.params.id)
      .then(adventure => res.status(200).send(adventure))
      .catch(error => res.status(400).send(error));
  },
  
  // get form elements
  create(req, res) {
    console.log('adventure', Adventure)
    return Adventure
      .create({
        title: req.body.title,
        subtext: req.body.subtext,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        locationName: req.body.locationName
      })
      .then(adventure => res.status(201).send(adventure))
      .catch(error => res.status(400).send(error))
  }
};