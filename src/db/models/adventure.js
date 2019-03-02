'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adventure = sequelize.define('adventure', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // imageIds: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'images',
    //     key: 'id',
    //     as: 'imageKey'
    //   }
    // },
    title: {
      type: DataTypes.STRING,
      notNull: true
    },
    subtext: {
      type: DataTypes.TEXT,
      notNull: false,
      default: null
    },
    dateStart: {
      type: DataTypes.DATE,
      notNull: true
    },
    dateEnd: {
      type: DataTypes.DATE,
      notNull: true
    },
    locationName: {
      type: DataTypes.STRING,
      notnull: false,
      default: null,
      // onDelete: 'SET NULL',
      // references: {
      //   model: 'locations',
      //   key: 'name',
      //   as: 'locationKey',
      // },
    }
  }, {});

  Adventure.associate = (models) => {
    Adventure.hasMany(models.image, {
      foreignKey: 'adventure_id',
      as: 'images'
    });
    // associations can be defined here
    // Adventure.hasZeroOrOne(models.location)

  };
  
  // Adventure.sync({ force: false })
  
  return Adventure;
};