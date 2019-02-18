/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const ImageVariation = sequelize.define('imagevariation', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image_id: {
      type: DataTypes.INTEGER,
    },
    thumb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    sm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    md: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    lg: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {});

  ImageVariation.associate = (models) => {
    ImageVariation.belongsTo(models.iamge, {
      foreignKey: 'image_id'
    });
  }

  // ImageVariation.sync({ force: false })

  return ImageVariation;
};
