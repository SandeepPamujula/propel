'use strict';

const Sequelize = require('sequelize');
const {assign} = require('lodash');

const {salt, hash, check} = require('../../utilities/saltHash');
const db = require('./index.js');

const TABLE_NAME = 'users';


const fields = {
            firstName: {type: Sequelize.STRING, allowNull: false},
            lastName: {type: Sequelize.STRING, allowNull: false},
            email: {type: Sequelize.STRING(100), unique: true},
            hashedPassword: {type: Sequelize.STRING},
            salt: {type: Sequelize.STRING},
            password: {type: Sequelize.VIRTUAL}
};

const options = {
  engine: 'MYISAM',
  freezeTableName: true,
  tableName: TABLE_NAME,
  timestamps: false,
  setterMethods: {
                password: function(value) {
                    const self = this;                    
                    self.setDataValue('password', value);
                    self.salt = salt();
                    self.hashedPassword = hash(value, this.salt);
                }
  }
};

const classMethods = {
        checkPassword: (user, password) => check(password, user.salt, user.hashedPassword),
        store: function (data) {
            const self = this;            
            const userData = data;
            return self.findOrCreate({where: {email: userData.email}, defaults: userData}).spread((result, created) => {
                if (!created) {
                    return Promise.reject({code: 'duplicate_email'});
                }
                return result;
            });
        }
};

module.exports = function (sequelize) {
    const User = sequelize.define(TABLE_NAME, fields, options);
    
    assign(User, classMethods);
    return User;
};
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });