'use strict';

const {assign} = require('lodash');
const Sequelize = require('sequelize');

const db = require('./index.js');

const TABLE_NAME = 'booking';


const fields = {
            code: {type: Sequelize.STRING, allowNull: false},
            flight_chart_id: {type: Sequelize.INTEGER, allowNull: false},
            seats_booked: {type: Sequelize.SMALLINT, allowNull: false},
            status: {type: Sequelize.STRING, allowNull: false}

};

const options = {
  engine: 'MYISAM',
  freezeTableName: true,
  tableName: TABLE_NAME,
  timestamps: false
};

const classMethods = {};



module.exports = function (sequelize) {
    const Booking = sequelize.define(TABLE_NAME, fields, options);
    
    assign(Booking, classMethods);
    return Booking;
};
