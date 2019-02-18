'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => 
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    console.log('file', file)
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// const AdventureModel = require('./adventure')

// db.adventure = require('./adventure.js')(sequelize, Sequelize);
// db.image = require('./image.js')(sequelize, Sequelize);
// db.imagevariation = require('./imagevariation.js')(sequelize, Sequelize);
// db.location = require('./location.js')(sequelize, Sequelize);

// db.location.sync({ force: false });
// db.adventure.sync({ force: false });
// db.image.sync({ force: false });
// db.imagevariation.sync({ force: false });


// Object.keys(db).forEach(modelName => {
//   console.log('modelName', modelName)
//   if (db[modelName].associate) {
//     console.log(`yes ${modelName} has an assocination`)
//     console.log(db[modelName])
//     console.log(db)
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;

module.exports = db;
