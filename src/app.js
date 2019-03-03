const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes')
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ORIGIN = 'http://localhost:8080';

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', ORIGIN)
  next();
})

routes(app)

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness',
}));

module.exports = app;