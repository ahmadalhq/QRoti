'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      const data = [
        {
            username : "user",
            password : "$2b$10$33YGz756KYa4wsrLj6VsW.6BNl7jLeGrH9i7zbVSEGwj3j5f5zP06",
            first_name : "Mr.",
            last_name : "User",
            email : "user@test.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username : "admin",
            password : "$10$34H.zefCpnoHjYi2g1evROSLtWlKtY/rYjf1XOoB10p0IFXmSXbqa",
            first_name : "Mr.",
            last_name : "Admin",
            email : "admin@supply.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username : "bolu",
            password : "$10$hFwrKmLlZfRy.J0Lw7AU5eBY9J0BMWRpK3JHFeCvGzxtUFRj9.GwS",
            first_name : "bolu",
            last_name : "gulung",
            email : "belisaja@bolu.com",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]
      return queryInterface.bulkInsert('Users', data, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Users', null, {});
    
  }
};

// sequelize db:seed:all