module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('image', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    adventure_id: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    variations: {
      type: DataTypes.JSON,
      allowNull: true
    },
    album_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    folder: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});

  Image.associate = (models) => {
    Image.belongsTo(models.adventure, {
      foreignKey: 'adventure_id'
    });
    Image.hasOne(models.imagevariations, {
      foreignKey: 'image_id',
      as: 'imageVariations'
    })
  }

  return Image;
};
