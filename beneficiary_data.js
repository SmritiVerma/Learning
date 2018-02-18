'use strict';
module.exports = (sequelize, DataTypes) => {
  var beneficiary_data = sequelize.define('beneficiary_data', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    uniqueID: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beneficiary_data;
};
