'use strict';
const {encrypt} = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model{
    get fullname() {
      return `${this.first_name} ${this.last_name}`
    }
  }

  User.init({
    username: { 
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [3],
          msg : "username must more than 3 letters" 
        }
      }
    },
    password: DataTypes.STRING,
    first_name: { 
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [3],
          msg : "username must more than 3 letters" 
        }
      }
    },
    last_name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
                args : true,
                msg : `email must include "@" and "." `
               },
        len : {
          args : [3],
          msg : "email length more than 3"
        }
     }
    }
  },{
    hooks : {
      beforeCreate: (user) => {
        if (user.last_name == ''){
          user.last_name = user.first_name
        }
        user.password = encrypt(user.password)
      }
    },
    sequelize,
    modelName : 'User'
  })
  // const Users = sequelize.define('Users', {
  //   username: DataTypes.STRING,
  //   password: DataTypes.STRING,
  //   first_name: DataTypes.STRING,
  //   last_name: DataTypes.STRING,
  //   email: DataTypes.STRING
  // }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Supply, {through : "Transactions"})
    // associations can be defined here
  };
  return User;
};