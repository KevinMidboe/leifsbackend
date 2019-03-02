const adventureController = require('../controllers').Adventure;
const calendarController = require('../controllers').Calendar;
const locationController = require('../controllers').Location;
const imageController = require('../controllers').Image;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Leifs Adventures!'
  }));

  // Adventures
  app.get('/api/adventure', adventureController.list)
  app.post('/api/adventure', adventureController.create)
  
  app.get('/api/adventure/location', adventureController.location);
  app.get('/api/adventure/:id', adventureController.get);
  
  app.post('/api/upload/', adventureController.uploadHandler);

  // Dates
  app.get('/api/dates', calendarController.list)

  // Location (map)
  app.get('/api/location', locationController.list)
  
  // images
  app.get('/api/images', imageController.all)
  app.get('/api/images/:adventureId', imageController.list)
}