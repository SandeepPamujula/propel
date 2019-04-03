'use strict';

const {assign} = require('lodash');
const Sequelize = require('sequelize');

const db = require('./index.js');

const TABLE_NAME = 'flight';


const fields = {
            code: {type: Sequelize.STRING, allowNull: false},
            organization: {type: Sequelize.STRING, allowNull: false},
            total_seats: {type: Sequelize.INTEGER, allowNull: false}
};

const options = {
  engine: 'MYISAM',
  freezeTableName: true,
  tableName: TABLE_NAME,
  timestamps: false
};

const classMethods = {};



module.exports = function (sequelize) {
    const Flight = sequelize.define(TABLE_NAME, fields, options);
    
    assign(Flight, classMethods);
    return Flight;
};
