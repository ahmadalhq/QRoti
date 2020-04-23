'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
   const data = [
    {
        name : "bolu",
        product_type : "food",
        price : 10000,
        quantity : 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name : "milk",
        product_type : "drink",
        price : 590,
        quantity : 25,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name : "knife",
        product_type : "tool",
        price : 10000,
        quantity : 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name : "snack",
        product_type : "food",
        price : 1000,
        quantity : 90,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]
      return queryInterface.bulkInsert('Supplies', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Supplies', null, {});
    
  }
};

// sequelize db:seed:all 