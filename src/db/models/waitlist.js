'use strict';
module.exports = (sequelize, DataTypes) => {
  const Waitlist = sequelize.define(
    'Waitlist',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      userId: DataTypes.STRING,
      locationId: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Waitlist.associate = function (models) {
    // associations can be defined here
  };
  return Waitlist;
};
