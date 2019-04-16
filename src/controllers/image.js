const Image = require('../db/models').image;
const path = require("path");

const SORT_OPTIONS = ['asc', 'desc']

module.exports = {

  all(req, res) {
    console.log('here')
    return Image
      .findAll()
      .then(images => res.status(200).send(images))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    let sortOption = SORT_OPTIONS[0];

    if (req.query.sort && SORT_OPTIONS.includes(req.query.sort)) {
      sortOption = req.query.sort;
    }

    return Image
      .findAll({
        where: { 'adventure_id': req.params.adventureId },
        order: [
          ['album_order', sortOption],
        ]
      })
      .then(images => res.status(200).send(images))
      .catch(error => res.status(400).send(error))
  },

  delete(req, res) {
    const filename = req.query.filename;

    return Image.findOne({
      where: { filename }
    })
    .then(file => path.join(file.folder, file.filename))
    .catch(err => res.status(404).send('Image does not exist'))
    .then(filepath => {
      console.log('filePath', filepath)

      return Image.destroy({
        where: { filename }
      })
    })
    .then(resp => res.status(200).send('Successfully removed image'))
    .catch(err => console.log('Image not removed, error occured', err))
  },

  uploadRequest(proxyReq, req, res) {
    console.log('landed proxyReq')
  },

  uploadHandler(proxyRes, req, res) {
    console.log('landed proxyRes')
    console.log('req id', req.params.id)

    var body = new Buffer.from('');
    proxyRes.on('data', function (data) {
        body = Buffer.concat([body, data]);
    });
    proxyRes.on('end', function () {
        body = JSON.parse(body);
        console.log("res from proxied server:", body);
        let { uploaded } = body;

        uploaded.forEach((file, index) => {
          console.log('saving file', file)

          Image.create({
            filename: file.filename,
            adventure_id: req.params.id,
            variations: { sizes: file.variations },
            album_order: index,
            folder: file.folder
          })
          .catch((err) => console.error(err))
        })


        res.end("my response to cli");
    });
  }
};
