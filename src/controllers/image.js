const Image = require('../db/models').image;

// const { Image } = require('../db/sequelize')

module.exports = {

  all(req, res) {
    console.log('here')
    return Image
      .findAll()
      .then(images => res.status(200).send(images))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    return Image
      .findAll({
        where: { 'adventure_id': req.params.adventureId }
      })
      .then(images => res.status(200).send(images))
      .catch(error => res.status(400).send(error))
  },
};