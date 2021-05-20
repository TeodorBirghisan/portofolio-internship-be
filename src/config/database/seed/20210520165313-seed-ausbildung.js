'use strict';
let ausbildungs = require('../../constants/ausbildung.seed').ausbildungs;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ausbildungs', ausbildungs, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ausbildungs', null, {});
  },
};
