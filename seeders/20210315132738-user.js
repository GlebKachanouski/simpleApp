'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
     {
       nickname: "DonBonDasIBHNGazza",
       email: "email=)",
       password: "1111",
       createdAt: new Date(),
       updatedAt: new Date(),
     },{
       nickname: "JustMisha",
       email: "MishasEmail",
       password: "GazzaLoh",
       createdAt: new Date(),
       updatedAt: new Date(),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
