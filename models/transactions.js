'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Transaction extends Model{}


  Transaction.init({
    buyer: {
          type : DataTypes.STRING,
          validate : {
            len : {
              isNumeric : false,
              args : [3],
              msg : "buyer must more than 3 letters"
            }
          }
        },
        quantity: {
          type : DataTypes.INTEGER,
          validate : {
            notEmpty : true,
            min : 1,
          }
        },
        total: DataTypes.INTEGER,
        SupplyId : DataTypes.INTEGER,
        UserId : DataTypes.INTEGER
  },{
    hooks : {
      beforeCreate: (transaction) => {
        const models = sequelize.models
        return models.Supply
          .findByPk(transaction.SupplyId)
          .then(data => {
            // console.log(data)
             transaction.total = data.price * transaction.quantity
              data.quantity = data.quantity - transaction.quantity
             return models.Supply
                .update({quantity : data.quantity}, {where : {id : transaction.SupplyId}})
          })
 
    }},
    sequelize,
    modelName : 'Transaction'
  })
 
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Supply)
    Transaction.belongsTo(models.User)
    // associations can be defined here
  };
  return Transaction;
};