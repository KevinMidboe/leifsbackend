const Adventure = require('../db/models').adventure;

const Op = require('sequelize').Op;

module.exports = {

  list(req, res) {
    return Adventure
      .findAll({
        attributes: ['id', 'title', 'dateStart', 'dateEnd', 'locationName']
      })
      .then(adventure => res.status(200).send(adventure))
      .catch(error => res.status(400).send(error))
  },

};