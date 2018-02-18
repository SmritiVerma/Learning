'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.sequelize.query('UPDATE `beneficiary_data` AS `beneficiary_data` SET `beneficiary_data`.`dob` = '1992-09-07' WHERE `beneficiary_data`.`firstName` = 'Smriti';')
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

