const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];

const AdventureModel = require('./models/adventure')
const ImageModel = require('./models/image')
const ImageVariationModel = require('./models/imagevariation')
const LocationModel = require('./models/location')

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const Adventure = AdventureModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
const AdventureImages = sequelize.define('adventure_image', {})
const Image = ImageModel(sequelize, Sequelize)
const ImageVariation = ImageVariationModel(sequelize, Sequelize)
const Location = LocationModel(sequelize, Sequelize)

// Adventure.hasMany(Image, { through: AdventureImages, unique: false })
// Image.belongsTo(Adventure, { through: AdventureImages, unique: false })
// Blog.belongsTo(User);

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Adventure,
  Image,
  ImageVariation,
  Location
}