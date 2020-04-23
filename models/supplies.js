'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Supply extends Model{}

  Supply.init({
      name: {
        type : DataTypes.STRING,  
        validate: {
          len : {
            args : [3,999], //length must between 3 to 999
            msg: 'name must more than 3 letters'
          }
        }
      },
      product_type: DataTypes.STRING,
      price: {
        type : DataTypes.INTEGER,
        allowNull : false,
        validate : {
          isInt : true,
          isFloat: false
        }
      },
      quantity: {
        type : DataTypes.INTEGER,
        validate : {
          min : 1,
          isFloat : false
        }
      }

    },{
      sequelize,
      modelName : 'Supply'
    })

  // const Supplies = sequelize.define('Supplies', {
  //   name: DataTypes.STRING,
  //   password: DataTypes.STRING,
  //   price: DataTypes.INTEGER,
  //   quantity: DataTypes.INTEGER
  // }, {});
  Supply.associate = function(models) {
    Supply.belongsToMany(models.User, {through : 'Transactions'})
    // associations can be defined here
  };
  return Supply;
};