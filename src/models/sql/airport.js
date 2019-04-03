'use strict';

const Sequelize = require('sequelize');
const {assign} = require('lodash');
const db = require('./index.js');

const TABLE_NAME = 'airport';


const fields = {
    name: {type: Sequelize.STRING, allowNull: false},
    city: {type: Sequelize.STRING, allowNull: false},
    country: {type: Sequelize.STRING, allowNull: false},
    search_match: {type: Sequelize.STRING, allowNull: false}
};

const options = {
  engine: 'MYISAM',
  freezeTableName: true,
  tableName: TABLE_NAME,
  timestamps: false
};

module.exports = (sequelize, DataTypes) => 
            sequelize.define(TABLE_NAME, fields, options);
    
