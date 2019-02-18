'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: DataTypes.STRING, 
      // primaryKey: true,
      allowNull: false 
    },
    geoposition: { 
      type: DataTypes.STRING, 
      allowNull: true, 
      defaultValue: null
    },
    mapboxData: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null
    },
    // adventureId: {
    //   type: DataTypes.INTEGER,
    //   onDelete: 'SET NULL',
    //   references: {
    //     model: 'adventures',
    //     key: 'id',
    //     as: 'adventureKey',
    //   },
    // }
  }, {});

  Location.associate = function(models) {
    // associations can be defined here
    // Location.belongsTo(models.adventure)
  };

  // Location.sync({ force: false })

  return Location;
};