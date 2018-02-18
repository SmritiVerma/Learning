'use strict';
var shortid = require('shortid');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('beneficiary_data', [{
        firstName: 'Smriti',
        lastName: 'Verma',
        dob: '1992-03-28',
        uniqueID: shortid.generate(),
	createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
        */

      return queryInterface.bulkDelete('beneficiary_data', null, {});
    
  }
};

