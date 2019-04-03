'use strict';

const {assign} = require('lodash');
const Sequelize = require('sequelize');

const db = require('./index.js');

const TABLE_NAME = 'flight_chart';


const fields = {
            origin_id: {type: Sequelize.INTEGER, allowNull: false},
            destination_id: {type: Sequelize.INTEGER, allowNull: false},
            start_time: {type: Sequelize.DATE, allowNull: false},
            travel_duration: {type: Sequelize.INTEGER, allowNull: false},
            flight_code: {type: Sequelize.STRING, allowNull: false},
            total_booked_seats: {type: Sequelize.INTEGER, allowNull: false}
};

const options = {
  engine: 'MYISAM',
  freezeTableName: true,
  tableName: TABLE_NAME,
  timestamps: false
};

const classMethods = {};



module.exports = function (sequelize) {
    const FlightChart = sequelize.define(TABLE_NAME, fields, options);
    
    assign(FlightChart, classMethods);
    return FlightChart;
};
