'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slot = sequelize.define(
    'Slot',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      locationId: DataTypes.STRING,
      isReserved: DataTypes.BOOLEAN,
      userId: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Slot.associate = function (models) {
    // associations can be defined here
  };
  return Slot;
};
