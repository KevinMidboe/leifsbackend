const app = require('./app');

const port = parseInt(process.env.PORT) || 5000;

module.exports = app.listen(port, () => {
   console.log('leifsBackend');
   console.log(`Webserver is listening on ${port}`);
});