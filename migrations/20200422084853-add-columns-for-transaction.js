'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const p1 =  queryInterface.addColumn('Transactions', 'UserId', {
      type: Sequelize.INTEGER,
      foreignKey : true,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "cascade",
      onDelete: 'cascade'
    })
  
      const p2 = queryInterface.addColumn('Transactions', 'SupplyId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Supplies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })
  
      return Promise.all([p1,p2])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   const p1 = queryInterface.removeColumn('Transactions', 'UserId');
   const p2 = queryInterface.removeColumn('Transactions', 'SupplyId')

   return Promise.all([p1,p2])
  }
};
