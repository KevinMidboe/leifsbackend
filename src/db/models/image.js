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
    // adventure_key: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'adventures',
    //     key: 'id',
    //     as: 'adventureKey'
    //   }
    // },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    size: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    album_order: {
      type: DataTypes.INTEGER,
      allowNull: true
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

  // Image.sync({ force: false })

  return Image;
};
