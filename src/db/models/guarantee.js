'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guarantee = sequelize.define(
    'Guarantee',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      userId: DataTypes.STRING,
      locationId: DataTypes.STRING,
      isExpired: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Guarantee.associate = function (models) {
    // associations can be defined here
  };
  return Guarantee;
};
