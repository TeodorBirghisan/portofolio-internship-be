'use strict';
let details = require('../../constants/details.seed').details;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Details', details, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Details', null, {});
  },
};
